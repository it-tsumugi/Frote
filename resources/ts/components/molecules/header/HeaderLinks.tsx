import { VFC } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import media from "../../../assets/styles/media";
import axios from "axios";
import { useHistory } from "react-router";

import { DefaultButton } from "../../atoms/button/DefaultButton";
import { SFlexContainer } from "../../atoms/style/SelectStyle";

import { path } from "../../../assets/data/path";
import { booleanState } from "../../../state/atom";
import { booleanStateKey } from "../../../assets/data/stateKey";

export const HeaderLinks: VFC = () => {
    const [isLogin, setIsLogin] = useRecoilState(
        booleanState(booleanStateKey.isLogin)
    );
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
            <SFlexContainer>
                <SLink to={path.top}>トップ</SLink>
                {!isLogin ? (
                    <>
                        <SLink to={path.login}>ログイン</SLink>
                        <SLink to={path.confirmRegister}>登録</SLink>
                    </>
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
};

const SComponentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.lessThanlg`
    display: none;
    `}
`;

const SLink = styled(Link)`
    color: white;
    margin: 0 10px;
    &:hover {
        color: gray;
    }
`;
