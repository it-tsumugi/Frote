import React, { VFC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useAuthContext } from "../providers/AuthProvider";

type propsType = {
    path: string;
    children: React.ReactNode;
};

export const AuthRoute: VFC<propsType> = (props) => {
    const { isLogin } = useAuthContext();
    useAuth();
    const { path, children } = props;
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
