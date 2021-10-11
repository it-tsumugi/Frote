import axios from "axios";
import React, { useEffect, useState, VFC } from "react";
import { Route, Redirect } from "react-router-dom";
import { NavLessLayout } from "../components/templates/NavLessLayout";
import { useAuthContext } from "../providers/AuthProvider";

type propsType = {
    path: string;
    children: React.ReactNode;
};

export const GuestRoute: VFC<propsType> = (props) => {
    const { isLogin, setIsLogin } = useAuthContext();
    const [isLoading, setIsLoading] = useState(true);
    const { path, children } = props;

    console.log("GuestRoute:isLogin = " + isLogin);
    console.log("GuestRoute:isLoading = " + isLoading);
    useEffect(() => {
        const Auth = async () => {
            try {
                const res = await axios.get("/api/auth");
                setIsLogin(res.data.isLogin);
                console.log(
                    "GuestRoute:ログイン情報を取得しisLoginセットしました"
                );
            } catch (error) {
                console.log("GuestRoute:ログイン情報が取得出来ませんでした");
                setIsLogin(false);
            }
            setIsLoading(false);
        };
        Auth();
    }, []);
    return (
        <Route
            path={path}
            render={({ location }) => {
                if (isLoading) {
                    return (
                        <NavLessLayout>
                            <div>ローディング中</div>
                        </NavLessLayout>
                    );
                } else {
                    return isLogin ? (
                        <Redirect
                            to={{
                                pathname: "/home",
                                state: { from: location },
                            }}
                        />
                    ) : (
                        children
                    );
                }
            }}
        />
    );
};
