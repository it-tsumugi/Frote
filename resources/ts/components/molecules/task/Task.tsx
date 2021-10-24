import { VFC } from "react";
import styled from "styled-components";

import { DefaultButton } from "../../atoms/button/DefaultButton";
import { DeleteTaskButton } from "../../atoms/button/DeleteTaskButton";
import { NavButton } from "../../atoms/button/NavButton";
import { DeleteGroupTaskButton } from "../../atoms/button/DeleteGroupTaskButton";
import { DeleteImpTaskButton } from "../../atoms/button/DeleteImpTaskButton";
import { DeleteUrgTaskButton } from "../../atoms/button/DeleteUrgTaskButton";

import { path } from "../../../assets/data/path";
import { taskType } from "../../../assets/type/dataType";
import { SText } from "../../atoms/style/TextStyle";
import media from "../../../assets/styles/media";

type propsType = {
    task: taskType;
    task_list_id: number;
    isDelete: boolean;
    index: number;
    taskType: string;
};

export const Task: VFC<propsType> = (props) => {
    const { task, task_list_id, isDelete, index, taskType } = props;

    const DeleteButton: VFC = () => {
        if (taskType === "task") {
            return (
                <DeleteTaskButton task={task} task_list_id={task_list_id}>
                    削除
                </DeleteTaskButton>
            );
        } else if (taskType === "imp") {
            return (
                <DeleteImpTaskButton task={task} task_list_id={task_list_id}>
                    削除
                </DeleteImpTaskButton>
            );
        } else if (taskType === "urg") {
            return (
                <DeleteUrgTaskButton task={task} task_list_id={task_list_id}>
                    削除
                </DeleteUrgTaskButton>
            );
        } else if (taskType === "group") {
            return (
                <DeleteGroupTaskButton task={task} task_list_id={task_list_id}>
                    削除
                </DeleteGroupTaskButton>
            );
        } else {
            return null;
        }
    };

    return (
        <SComponentContainer>
            <STaskTextarea>
                {index < 9 ? (
                    <SSText>{"0" + task.order + " :" + task.text} </SSText>
                ) : (
                    <SSText>{task.order + " :" + task.text} </SSText>
                )}
            </STaskTextarea>
            <STaskButtonAreaContainer>
                {isDelete ? <DeleteButton /> : <EmptyButton>削除</EmptyButton>}
                <NavButton to={`/${task.task_id}` + path.insertTask}>
                    挿入
                </NavButton>
                <NavButton to={`/${task.task_id}` + path.editTask}>
                    編集
                </NavButton>
            </STaskButtonAreaContainer>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.md`
    border: 1px solid white;
    border-radius: 2px;
    `}
`;

const STaskButtonAreaContainer = styled.div`
    ${media.md`
    display: flex;
    flex-direction: column;
    `}
`;

const STaskTextarea = styled.div`
    display: flex;
    justify-content: center;
`;

const SSText = styled(SText)`
    width: 600px;
    ${media.lg`
    width: 400px;
    `}
    ${media.md`
    width: 250px;
    `}
`;

const EmptyButton = styled(DefaultButton)`
    visibility: hidden;
`;
