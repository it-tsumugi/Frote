import { VFC } from "react";

import { NavButton } from "../../atoms/button/NavButton";

import { path } from "../../../assets/data/path";
import styled from "styled-components";

export const TaskListsButtonArea: VFC = () => {
    return (
        <SComponentContainer>
            <NavButton to={path.addTaskList}>タスクリストの追加</NavButton>
            <NavButton to={path.group}>グループの編集</NavButton>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    margin: 20px;
    margin-bottom: 300px;
`;
