import React, { createContext, useContext, useState, VFC } from "react";
import { groupListType } from "../assets/type/dataType";

const GroupListsContext = createContext(
    {} as {
        groupLists: groupListType[];
        setGroupList: React.Dispatch<React.SetStateAction<groupListType[]>>;
    }
);

type propsType = {
    children: React.ReactElement;
};

export const GroupListsProvider: VFC<propsType> = (props) => {
    const { children } = props;
    const [groupLists, setGroupList] = useState<groupListType[]>([]);
    return (
        <GroupListsContext.Provider value={{ groupLists, setGroupList }}>
            {children}
        </GroupListsContext.Provider>
    );
};

export const useGroupListsContext = () => {
    return useContext(GroupListsContext);
};
