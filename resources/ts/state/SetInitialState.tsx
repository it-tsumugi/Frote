import { VFC } from "react";
import { useRecoilValue } from "recoil";

import { Loading } from "../components/pages/Loading";

import { useAuth } from "../hooks/useAuth";
import { booleanState } from "./atom";

type propsType = {
    children: React.ReactNode;
};

export const SetInitialState: VFC<propsType> = (props) => {
    const { children } = props;
    const isComplete = useRecoilValue(booleanState("isComplete"));
    useAuth();
    return <>{isComplete ? children : <Loading />}</>;
};
