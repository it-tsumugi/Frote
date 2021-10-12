import { VFC } from "react";

import { TaskLists } from "../../organisms/TaskLists";

import { TaskListsButtonArea } from "../../molecules/task/TaskListsButtonArea";

export const GroupDisplay: VFC = () => {
    return (
        <>
            <TaskLists />
            <TaskListsButtonArea />
        </>
    );
};
