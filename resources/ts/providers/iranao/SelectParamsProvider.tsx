import React, { createContext, useContext, useState, VFC } from "react";
import { selectParamsType } from "../../assets/type/dataType";

const SelectParamsContext = createContext(
    {} as {
        selectParams: selectParamsType;
        setSelectParams: React.Dispatch<React.SetStateAction<selectParamsType>>;
    }
);

type propsType = {
    children: React.ReactElement;
};

export const SelectParamsProvider: VFC<propsType> = (props) => {
    const { children } = props;
    const [selectParams, setSelectParams] = useState<selectParamsType>({
        imp: 0,
        urg: 0,
        group: "",
    });
    return (
        <SelectParamsContext.Provider value={{ selectParams, setSelectParams }}>
            {children}
        </SelectParamsContext.Provider>
    );
};

export const useSelectParamsContext = () => {
    return useContext(SelectParamsContext);
};
