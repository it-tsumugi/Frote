import React, { VFC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../providers/AuthProvider";

type propsType = {
    path: string;
    children: React.ReactNode;
};

export const GuestRoute: VFC<propsType> = (props) => {
    const { isLogin } = useAuthContext();
    const { path, children } = props;
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
