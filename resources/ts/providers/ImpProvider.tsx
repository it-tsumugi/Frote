import React, { createContext, useContext, useState, VFC } from "react";

const ImpContext = createContext(
    {} as {
        imp: number;
        setImp: React.Dispatch<React.SetStateAction<number>>;
    }
);

type propsType = {
    children: React.ReactElement;
};

export const ImpProvider: VFC<propsType> = (props) => {
    const { children } = props;
    const [imp, setImp] = useState(0);
    return (
        <ImpContext.Provider value={{ imp, setImp }}>
            {children}
        </ImpContext.Provider>
    );
};

export const useImpContext = () => {
    return useContext(ImpContext);
};
