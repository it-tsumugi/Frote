import { VFC } from "react";
import styled from "styled-components";

import { TaskLists } from "../../organisms/TaskLists";

import { TaskListsButtonArea } from "../../molecules/task/TaskListsButtonArea";
import { useGetTaskLists } from "../../../hooks/useGetTaskLists";
import { useTaskListsContext } from "../../../providers/TaskListsProvider";

export const Home: VFC = () => {
    const { taskLists } = useTaskListsContext();
    useGetTaskLists();
    return (
        <>
            {taskLists.length !== 0 ? (
                <TaskLists taskLists={taskLists} />
            ) : (
                <h3>タスクは存在しません</h3>
            )}
            <TaskListsButtonArea />
        </>
    );
};

// const SComponentContainer = styled.div`
//     margin-left: auto;
//     margin-right: auto;
//     width: 100%;
// `;
