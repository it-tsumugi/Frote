import axios from "axios";
import { useEffect, VFC } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import styled from "styled-components";

import { path } from "../../../assets/data/path";
import { useAuthContext } from "../../../providers/AuthProvider";
import { DefaultButton } from "../../atoms/button/DefaultButton";

export const Header: VFC = () => {
    const { isLogin, setIsLogin } = useAuthContext();
    useEffect(() => {
        const Auth = async () => {
            try {
                const res = await axios.get("/api/auth");
                setIsLogin(res.data.isLogin);
                console.log("Header:ログイン情報を取得しisLoginセットしました");
            } catch (error) {
                console.log("Header:ログイン情報が取得出来ませんでした");
                setIsLogin(false);
            }
        };
        Auth();
    }, []);

    const history = useHistory();

    const logout = async () => {
        try {
            const res = await axios.get("/api/logout");
            setIsLogin(false);
            history.push({ pathname: "/login" });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <SComponentContainer>
            <Link to={path.top}>Top</Link>
            {!isLogin ? (
                <>
                    <Link to={path.login}>Login</Link>
                    <Link to={path.register}>Register</Link>
                </>
            ) : null}
            {isLogin ? (
                <>
                    <Link to={path.home}>Home</Link>
                    <DefaultButton onClick={logout}>Logout</DefaultButton>
                </>
            ) : null}

            <Link to={path.help}>Help</Link>
            <Link to={path.test}>Test</Link>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    width: 100%;
    height: 5vh;
    background-color: #201a22;
`;
