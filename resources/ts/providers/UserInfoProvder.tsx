import React, { createContext, useContext, useState, VFC } from "react";
import { userInfoType } from "../assets/type/dataType";

const UserInfoContext = createContext(
    {} as {
        userInfo: userInfoType;
        setUserInfo: React.Dispatch<React.SetStateAction<userInfoType>>;
    }
);

type propsType = {
    children: React.ReactElement;
};

export const UserInfoProvider: VFC<propsType> = (props) => {
    const { children } = props;
    const [userInfo, setUserInfo] = useState<userInfoType>({} as userInfoType);

    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserInfoContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserInfoContext);
};
