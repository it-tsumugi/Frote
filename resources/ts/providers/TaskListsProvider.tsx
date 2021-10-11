import React, { createContext, useContext, useState, VFC } from "react";
import { taskListType } from "../assets/type/dataType";

const TaskListsContext = createContext(
    {} as {
        taskLists: taskListType[];
        setTaskLists: React.Dispatch<React.SetStateAction<taskListType[]>>;
    }
);

type propsType = {
    children: React.ReactElement;
};

export const TaskListsProvider: VFC<propsType> = (props) => {
    const { children } = props;
    const [taskLists, setTaskLists] = useState<taskListType[]>([]);
    return (
        <TaskListsContext.Provider value={{ taskLists, setTaskLists }}>
            {children}
        </TaskListsContext.Provider>
    );
};

export const useTaskListsContext = () => {
    return useContext(TaskListsContext);
};
