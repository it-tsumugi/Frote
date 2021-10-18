import { VFC } from "react";
import styled from "styled-components";
import { path } from "../../assets/data/path";
import { NavButton } from "../atoms/button/NavButton";

export const ConfirmRegister: VFC = () => {
    return (
        <SComponentContainer>
            <SSection>
                <STitle>登録のまえに</STitle>
                <SText>
                    このページでは登録の前に確認事項を説明させていただきます。
                </SText>
            </SSection>
            <SSection>
                <STitle>Froteの現状</STitle>
                <SText>
                    Froteは現在開発者のつむぎがポートフォリオとして開発中のものであり、まだ完成していません。
                    バグを発見した場合や意見のある場合はフッターにあるTwitterアイコンからTwitterのDMにて報告お願いします。
                </SText>
            </SSection>
            <SSection>
                <STitle>注意！メールアドレスとパスワードについて</STitle>
                <SText>
                    本サービスの利用にはメールアドレスとパスワードを用いた登録が必要ですが、メールアドレス認証機能がないためどちらも忘れたら確認することはできません。
                    またセキュリティ上の不安があるので、流出しても問題ないメールアドレスとパスワードにしてください。
                    お試しだけしたい方はログインページで試用のためのメールアドレスとパスワードを記載しているので利用してください。
                </SText>
            </SSection>
            <SSection>
                <STitle>注意！タスクのデータについて</STitle>
                <SText>
                    Froteは現在開発中であり、DBの破壊的な変更がある可能性があります。
                    その場合タスクデータを初期化する可能性があるため、ご了承ください。
                </SText>
            </SSection>
            <SSection>
                <SText>
                    以上のことを踏まえてご利用出来る方のみ登録をお願いします
                </SText>
            </SSection>
            <SNavButton to={path.register}>登録へ</SNavButton>
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

const SSection = styled.div`
    margin: 40px 20px;
`;

const STitle = styled.h1`
    font-size: 40px;
    font-weight: bold;
`;

const SText = styled.h2`
    font-size: 24px;
`;

const SNavButton = styled(NavButton)`
    font-size: 24px;
`;
