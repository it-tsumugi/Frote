import axios from "axios";
import { useEffect, useState, VFC } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { DefaultButton } from "../../atoms/button/DefaultButton";
import { SFlexContainer } from "../../atoms/style/SelectStyle";

import { path } from "../../../assets/data/path";
import { useAuth } from "../../../hooks/useAuth";
import { booleanState } from "../../../state/atom";

export const Header: VFC = () => {
    const [isLogin, setIsLogin] = useRecoilState(booleanState("isLogin"));
    const [isLoading, setIsLoading] = useState(true);
    useAuth();
    // useEffect(() => {
    //     setIsLoading(false);
    // });

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
    // if (isLoading) return null;
    // else {
    return (
        <SComponentContainer>
            <SFlexContainer>
                <SLink to={path.top}>トップ</SLink>
                {!isLogin ? (
                    <div>
                        <SLink to={path.login}>ログイン</SLink>
                        <SLink to={path.confirmRegister}>登録</SLink>
                    </div>
                ) : null}
                {isLogin ? <SLink to={path.home}>ホーム</SLink> : null}
                <SLink to={path.usage}>使い方</SLink>
                <SLink to={path.help}>ヘルプ</SLink>
            </SFlexContainer>
            {isLogin ? (
                <DefaultButton onClick={logout}>ログアウト</DefaultButton>
            ) : null}
        </SComponentContainer>
    );
    // }
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
