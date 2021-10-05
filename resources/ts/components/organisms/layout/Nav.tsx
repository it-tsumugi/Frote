import { VFC } from "react";
import styled from "styled-components";

import { NavButton } from "../../atoms/button/NavButton";
import { path } from "../../../assets/data/path";

export const Nav: VFC = () => {
    return (
        <SComponentContainer>
            <NavButton to={path.home}>一覧表示</NavButton>
            <NavButton to={path.group}>グループごとに表示</NavButton>
            <NavButton to={path.quadrant}>象限ごとに表示</NavButton>
            {/* <NavButton to={path.user}>ユーザー</NavButton> */}
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
