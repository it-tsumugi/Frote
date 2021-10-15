import { VFC } from "react";

import { TaskLists } from "../../organisms/TaskLists";

import { TaskListsButtonArea } from "../../molecules/task/TaskListsButtonArea";
import { useGetTaskLists } from "../../../hooks/useGetTaskLists";
import { useTaskListsContext } from "../../../providers/TaskListsProvider";
import styled from "styled-components";

export const Home: VFC = () => {
    const { taskLists } = useTaskListsContext();
    useGetTaskLists();
    return (
        <>
            <TaskLists taskLists={taskLists} />
            <TaskListsButtonArea />
        </>
    );
};

// const SComponentContainer = styled.div`
//     margin-left: auto;
//     margin-right: auto;
//     width: 100%;
// `;
