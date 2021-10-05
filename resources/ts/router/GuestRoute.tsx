import React, { VFC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useAuthContext } from "../providers/AuthProvider";

type propsType = {
    path: string;
    children: React.ReactNode;
};

export const GuestRoute: VFC<propsType> = (props) => {
    const { isLogin } = useAuthContext();
    const { path, children } = props;
    useAuth();
    console.log("GuestRoute:isLogin = " + isLogin);
    return (
        <Route
            path={path}
            render={({ location }) =>
                isLogin ? (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location },
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    );
};
