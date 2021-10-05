import React, { useEffect, useState, VFC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useAuthContext } from "../providers/AuthProvider";

type propsType = {
    path: string;
    children: React.ReactNode;
};

export const AuthRoute: VFC<propsType> = (props) => {
    const { isLogin } = useAuthContext();
    const { path, children } = props;

    useAuth();
    console.log("AuthRoute:isLogin = " + isLogin);

    return (
        <Route
            path={path}
            render={({ location }) =>
                isLogin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
