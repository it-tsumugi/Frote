import { VFC } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { Grid } from "@material-ui/core";

import { BigNavButton } from "../atoms/button/BigNavButton";
import { SCard } from "../atoms/style/SCard";

import { path } from "../../assets/data/path";
import { useAuth } from "../../hooks/useAuth";
import { booleanState } from "../../state/atom";

export const Top: VFC = () => {
    const isLogin = useRecoilState(booleanState("isLogin"));
    useAuth();
    return (
        <SComponentContainer>
            <STitle>Froteへようこそ！</STitle>
            <SSubText>
                Froteはタスクの優先度決定からの解放を目的としたタスク管理サービスです
            </SSubText>
            <SGrid container spacing={2}>
                {isLogin ? (
                    <Grid item xs={12} sm={6} md={6} lg={6} key={1}>
                        <SCard>
                            <BigNavButton to={path.home}>ホーム</BigNavButton>
                        </SCard>
                    </Grid>
                ) : (
                    <>
                        <Grid item xs={12} sm={6} md={4} lg={4} key={1}>
                            <SCard>
                                <BigNavButton to={path.login}>
                                    ログイン
                                </BigNavButton>
                            </SCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4} key={2}>
                            <SCard>
                                <BigNavButton to={path.confirmRegister}>
                                    登録
                                </BigNavButton>
                            </SCard>
                        </Grid>
                    </>
                )}
                {isLogin ? (
                    <Grid item xs={12} sm={6} md={6} lg={6} key={3}>
                        <SCard>
                            <BigNavButton to={path.help}>使い方</BigNavButton>
                        </SCard>
                    </Grid>
                ) : (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={3}>
                        <SCard>
                            <BigNavButton to={path.help}>使い方</BigNavButton>
                        </SCard>
                    </Grid>
                )}
            </SGrid>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation-name: anime;
    animation-duration: 0.3s;
    animation-timing-function: ease;
    @keyframes anime {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 0.2;
        }
        40% {
            opacity: 0.4;
        }
        60% {
            opacity: 0.6;
        }
        80% {
            opacity: 0.8;
        }
        100% {
            opacity: 1;
        }
    }
`;

const STitle = styled.h1`
    font-size: 48px;
`;

const SSubText = styled.h2`
    font-size: 32px;
`;

const SGrid = styled(Grid)`
    margin-top: 30px;
`;
