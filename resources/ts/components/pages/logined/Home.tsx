import { VFC } from "react";

import { CardList } from "../../organisms/CardList";

import { useTaskListsContext } from "../../../providers/TaskListsProvider";
import { useGetTaskLists } from "../../../hooks/useGetTaskLists";
import { TaskListsButtonArea } from "../../molecules/task/TaskListsButtonArea";

export const Home: VFC = () => {
    const { taskLists } = useTaskListsContext();
    useGetTaskLists();

    return (
        <>
            <CardList data={taskLists} />
            <TaskListsButtonArea />
        </>
    );
};
