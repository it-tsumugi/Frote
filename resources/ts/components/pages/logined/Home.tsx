import { VFC } from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";

import { TaskLists } from "../../organisms/TaskLists";
import { TaskListsButtonArea } from "../../molecules/task/TaskListsButtonArea";
import { SText } from "../../atoms/style/TextStyle";

import { useGetTaskLists } from "../../../hooks/useGetTaskLists";
import { taskListsState } from "../../../state/atom";

export const Home: VFC = () => {
    const taskLists = useRecoilValue(taskListsState);
    useGetTaskLists();

    return (
        <>
            {taskLists.length !== 0 ? (
                <TaskLists taskLists={taskLists} taskType="task" />
            ) : (
                <SText>タスクは存在しません</SText>
            )}
            <TaskListsButtonArea />
        </>
    );
};
