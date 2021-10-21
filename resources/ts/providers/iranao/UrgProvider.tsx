import React, { createContext, useContext, useState, VFC } from "react";

const UrgContext = createContext(
    {} as {
        urg: number;
        setUrg: React.Dispatch<React.SetStateAction<number>>;
    }
);

type propsType = {
    children: React.ReactElement;
};

export const UrgProvider: VFC<propsType> = (props) => {
    const { children } = props;
    const [urg, setUrg] = useState(0);
    return (
        <UrgContext.Provider value={{ urg, setUrg }}>
            {children}
        </UrgContext.Provider>
    );
};

export const useUrgContext = () => {
    return useContext(UrgContext);
};
