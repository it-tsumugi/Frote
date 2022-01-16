import { useEffect } from "react";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { booleanState, taskListsState } from "../state/atom";
import { booleanStateKey } from "../assets/data/stateKey";
import { fetchTaskLists } from "../api/fetchTaskLists";

export const useGetTaskLists = () => {
    const setTaskLists = useSetRecoilState(taskListsState);
    const setIsGetGroupLists = useSetRecoilState(
        booleanState(booleanStateKey.isGetGroupLists)
    );
    const promise = fetchTaskLists();

    useEffect(() => {
        Promise.all([promise]).then(([taskLists]) => {
            setTaskLists(taskLists);
            setIsGetGroupLists(true);
        });
    }, []);

    return useRecoilValueLoadable(taskListsState);
};
