import { useContext, useEffect, VFC } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import { useAuth } from "../../hooks/useAuth";
import { useGetUser } from "../../hooks/useGetUser";
import { useAuthContext } from "../../providers/AuthProvider";
import { useUserContext } from "../../providers/UserInfoProvder";

export const Home: VFC = () => {
    const { isLogin, setIsLogin } = useAuthContext();
    const { userInfo } = useUserContext();
    const history = useHistory();
    useGetUser();
    useAuth();

    const logout = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        try {
            const res = await axios.get("/api/logout");
            setIsLogin(false);
            history.push({ pathname: "/login" });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <button onClick={(e) => logout(e)}>Logout</button>
            <div>
                <h2>User</h2>
                {/* <div>name: {userInfo?.map((data) => data.name)}</div>
                <div>email: {userInfo?.map((data) => data.email)}</div> */}

                <div>name: {userInfo.name}</div>
                <div>email: {userInfo.email}</div>
            </div>
            {isLogin ? "ログインしています" : "ログインしていません"}
        </>
    );
};
