import React, { createContext, useContext, useState, VFC } from "react";
import { groupTaskListsType } from "../assets/type/dataType";

const GroupTaskListsContext = createContext(
    {} as {
        groupTaskLists: groupTaskListsType;
        setGroupTaskLists: React.Dispatch<
            React.SetStateAction<groupTaskListsType>
        >;
    }
);

type propsType = {
    children: React.ReactElement;
};

export const GroupTaskListsProvider: VFC<propsType> = (props) => {
    const { children } = props;
    const [groupTaskLists, setGroupTaskLists] = useState<groupTaskListsType>(
        []
    );
    return (
        <GroupTaskListsContext.Provider
            value={{ groupTaskLists, setGroupTaskLists }}
        >
            {children}
        </GroupTaskListsContext.Provider>
    );
};

export const useGroupTaskListsContext = () => {
    return useContext(GroupTaskListsContext);
};
