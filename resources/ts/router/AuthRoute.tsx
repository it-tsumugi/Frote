import React, { VFC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { booleanState } from "../state/atom";

type propsType = {
    path: string;
    children: React.ReactNode;
};

export const AuthRoute: VFC<propsType> = (props) => {
    const isLogin = useRecoilValue(booleanState("isLogin"));
    const { path, children } = props;

    return (
        <Route
            path={path}
            render={({ location }) => {
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
            }}
        />
    );
};
