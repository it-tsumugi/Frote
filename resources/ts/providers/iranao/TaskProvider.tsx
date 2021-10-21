import React, { createContext, useContext, useState, VFC } from "react";
import { taskType } from "../../assets/type/dataType";

const TaskContext = createContext(
    {} as {
        task: string;
        setTask: React.Dispatch<React.SetStateAction<string>>;
    }
);

type propsType = {
    children: React.ReactElement;
};

export const TaskProvider: VFC<propsType> = (props) => {
    const { children } = props;
    const [task, setTask] = useState("");

    return (
        <TaskContext.Provider value={{ task, setTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    return useContext(TaskContext);
};
