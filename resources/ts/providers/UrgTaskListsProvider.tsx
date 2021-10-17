import React, { createContext, useContext, useState, VFC } from "react";
import { urgTaskListsType } from "../assets/type/dataType";

const UrgTaskListsContext = createContext(
    {} as {
        urgTaskLists: urgTaskListsType;
        setUrgTaskLists: React.Dispatch<React.SetStateAction<urgTaskListsType>>;
    }
);

type propsType = {
    children: React.ReactElement;
};

export const UrgTaskListsProvider: VFC<propsType> = (props) => {
    const { children } = props;
    const [urgTaskLists, setUrgTaskLists] = useState<urgTaskListsType>([]);
    return (
        <UrgTaskListsContext.Provider value={{ urgTaskLists, setUrgTaskLists }}>
            {children}
        </UrgTaskListsContext.Provider>
    );
};

export const useUrgTaskListsContext = () => {
    return useContext(UrgTaskListsContext);
};
