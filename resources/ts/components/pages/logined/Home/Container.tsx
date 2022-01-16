import { VFC } from "react";
import { useRecoilValueLoadable } from "recoil";
import { taskListsState } from "../../../../state/atom";
import { LoadingIcon } from "../../../atoms/icon/LoadingIcon";
import { PHome } from "./Presenter";

export const Home: VFC = () => {
    const taskLists = useRecoilValueLoadable(taskListsState);

    switch (taskLists.state) {
        case "hasValue":
            return <PHome taskLists={taskLists.contents} />;
        case "loading":
            return <LoadingIcon />;
        case "hasError":
            throw taskLists.contents;
    }
};
