import { VFC } from "react";
import {
    useRecoilStateLoadable,
    useRecoilValue,
    useRecoilValueLoadable,
} from "recoil";
import { taskListsState } from "../../../../state/atom";
import { LoadingIcon } from "../../../atoms/icon/LoadingIcon";
import { PHome } from "./Presenter";
import { useGetTaskLists } from "../../../../hooks/useGetTaskLists";

export const Home: VFC = () => {
    // const taskLists = useRecoilValue(taskListsState);
    const taskLists = useGetTaskLists();

    switch (taskLists.state) {
        case "hasValue":
            return <PHome taskLists={taskLists.contents} />;
        case "loading":
            // return <LoadingIcon />;
            return <div>test</div>;
        case "hasError":
            throw taskLists.contents;
    }
};
