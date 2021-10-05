import styled from "styled-components";
import { VFC } from "react";
import media from "../../../assets/styles/media";

export const Footer: VFC = () => {
    return <SComponentContainer>&copy; 2021 Tsumugi</SComponentContainer>;
};

const SComponentContainer = styled.footer`
    background-color: #201a22;
    padding: 10px 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    //フッター固定用
    margin-top: auto;

    gap: 80px;
    height: 40px;
    ${media.lg`
    gap: 60px;
    height: 45px;
    `}
    ${media.md`
    gap: 40px;
    height: 50px;
    `}
`;
