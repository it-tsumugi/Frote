import { VFC } from "react";
import styled from "styled-components";

import { NavButton } from "../../atoms/button/NavButton";

import { path } from "../../../assets/data/path";
import { taskListType } from "../../../assets/type/dataType";
import { DeleteListButton } from "../../atoms/button/DeleteListButton";

type propsType = {
    taskList: taskListType;
};

export const TaskListButtonArea: VFC<propsType> = (props) => {
    const { taskList } = props;

    return (
        <SComponentContainer>
            {taskList.task.length > 1 ? (
                <SLabel htmlFor={"test" + taskList.task_list_id}>
                    すべて表示
                </SLabel>
            ) : (
                <SEmpty>すべて表示</SEmpty>
            )}

            <DeleteListButton taskList={taskList}>
                リストを削除
            </DeleteListButton>
            <NavButton to={`/${taskList.task_list_id}` + path.addTasks}>
                末尾にタスクを追加
            </NavButton>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    display: flex;
`;

const SLabel = styled.label`
    margin: 5px;
    display: inline-block;
    border-radius: 5%;
    font-size: 18pt;
    cursor: pointer;
    padding: 12px 12px;
    background: #2d2d31;
    color: #ffffff;
    line-height: 1em;
    opacity: 1;
    transition: 0.3s;
    box-shadow: 4px 4px 3px gray;
    font-size: 14px;
    &:hover {
        box-shadow: none;
        text-decoration: none;
        color: white;
        opacity: 0.6;
    }
`;

const SEmpty = styled(SLabel)`
    visibility: hidden;
`;
