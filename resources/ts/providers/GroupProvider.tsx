import React, { createContext, useContext, useState, VFC } from "react";

const GroupContext = createContext(
    {} as {
        group: string;
        setGroup: React.Dispatch<React.SetStateAction<string>>;
    }
);

type propsType = {
    children: React.ReactElement;
};

export const GroupProvider: VFC<propsType> = (props) => {
    const { children } = props;
    const [group, setGroup] = useState("その他");
    return (
        <GroupContext.Provider value={{ group, setGroup }}>
            {children}
        </GroupContext.Provider>
    );
};

export const useGroupContext = () => {
    return useContext(GroupContext);
};
