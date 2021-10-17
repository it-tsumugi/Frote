import React, { createContext, useContext, useState, VFC } from "react";
import { impTaskListsType } from "../assets/type/dataType";

const ImpTaskListsContext = createContext(
    {} as {
        impTaskLists: impTaskListsType;
        setImpTaskLists: React.Dispatch<React.SetStateAction<impTaskListsType>>;
    }
);

type propsType = {
    children: React.ReactElement;
};

export const ImpTaskListsProvider: VFC<propsType> = (props) => {
    const { children } = props;
    const [impTaskLists, setImpTaskLists] = useState<impTaskListsType>([]);
    return (
        <ImpTaskListsContext.Provider value={{ impTaskLists, setImpTaskLists }}>
            {children}
        </ImpTaskListsContext.Provider>
    );
};

export const useImpTaskListsContext = () => {
    return useContext(ImpTaskListsContext);
};
