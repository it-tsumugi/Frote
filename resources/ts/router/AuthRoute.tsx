import axios from "axios";
import React, { useEffect, useState, VFC } from "react";
import { Route, Redirect } from "react-router-dom";
import { NavLessLayout } from "../components/templates/NavLessLayout";
import { useAuthContext } from "../providers/AuthProvider";

type propsType = {
    path: string;
    children: React.ReactNode;
};

export const AuthRoute: VFC<propsType> = (props) => {
    const { isLogin, setIsLogin } = useAuthContext();
    const [isLoading, setIsLoading] = useState(true);
    const { path, children } = props;
    console.log("AuthRoute:isLogin = " + isLogin);
    console.log("AuthRoute:isLoading = " + isLoading);

    const Auth = async () => {
        try {
            const res = await axios.get("/api/auth");
            setIsLogin(res.data.isLogin);
            console.log("AuthRoute:ログイン情報を取得しisLoginセットしました");
        } catch (error) {
            console.log("AuthRoute:ログイン情報が取得出来ませんでした");
            setIsLogin(false);
        }
        setIsLoading(false);
    };
    useEffect(() => {
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
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        />
                    );
                }
            }}
        />
    );
};
