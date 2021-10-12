import React, { createContext, useContext, useState, VFC } from "react";
import { groupListType } from "../assets/type/dataType";

const GroupListContext = createContext(
    {} as {
        groupList: groupListType[];
        setGroupList: React.Dispatch<React.SetStateAction<groupListType[]>>;
    }
);

type propsType = {
    children: React.ReactElement;
};

export const GroupListProvider: VFC<propsType> = (props) => {
    const { children } = props;
    const [groupList, setGroupList] = useState<groupListType[]>([]);
    return (
        <GroupListContext.Provider value={{ groupList, setGroupList }}>
            {children}
        </GroupListContext.Provider>
    );
};

export const useGroupListContext = () => {
    return useContext(GroupListContext);
};
