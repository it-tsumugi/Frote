import React, { VFC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { booleanStateKey } from "../assets/data/stateKey";

import { booleanState } from "../state/atom";

type propsType = {
    path: string;
    children: React.ReactNode;
};

export const GuestRoute: VFC<propsType> = (props) => {
    const isLogin = useRecoilValue(booleanState(booleanStateKey.isLogin));
    const { path, children } = props;

    return (
        <Route
            path={path}
            render={({ location }) => {
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
            }}
        />
    );
};
