import { VFC } from "react";
import styled from "styled-components";
import axios from "axios";

import { Header } from "../organisms/layout/Header";
import { Nav } from "../organisms/layout/Nav";
import { useHistory } from "react-router";
import { useAuthContext } from "../../providers/AuthProvider";
import { useUserContext } from "../../providers/UserInfoProvder";
import { useGetUser } from "../../hooks/useGetUser";
import { useAuth } from "../../hooks/useAuth";
import { path } from "../../assets/data/path";
import { NavButton } from "../atoms/button/NavButton";
import { Footer } from "../organisms/layout/Footer";
import { SCenter } from "../atoms/style/SCenter";
import { SFooterFixed } from "../atoms/style/SFooterFixed";

type PropsType = {
    children: React.ReactElement;
};

export const LoginedLayout: VFC<PropsType> = (props) => {
    const { children } = props;
    const { setIsLogin } = useAuthContext();
    const history = useHistory();
    useGetUser();

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
        <SFooterFixed>
            <Header />
            <Nav />
            <SCenter>
                {children}
                <button style={{ width: "80px" }} onClick={(e) => logout(e)}>
                    Logout
                </button>
                <NavButton to={path.addtask}>タスクの追加</NavButton>
                <NavButton to={path.addgroup}>グループの追加</NavButton>
            </SCenter>
            <Footer />
        </SFooterFixed>
    );
};
