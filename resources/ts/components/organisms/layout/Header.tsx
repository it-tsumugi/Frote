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
            <div>
                <SLink to={path.top}>Top</SLink>
                {!isLogin ? (
                    <div>
                        <SLink to={path.login}>Login</SLink>
                        <SLink to={path.register}>Register</SLink>
                    </div>
                ) : null}
                {isLogin ? <SLink to={path.home}>Home</SLink> : null}
                <SLink to={path.help}>Help</SLink>
            </div>
            {isLogin ? (
                <DefaultButton onClick={logout}>Logout</DefaultButton>
            ) : null}
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    width: 100%;
    height: 5vh;
    background-color: #201a22;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SLink = styled(Link)`
    color: white;
    margin: 0 10px;
    &:hover {
        color: gray;
    }
`;
