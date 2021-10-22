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
        <>
            <STaskItemContainer>
                <STaskTextarea>
                    {index < 9 ? (
                        <SOrder>{"0" + task.order + " :"} </SOrder>
                    ) : (
                        <SOrder>{task.order + " :"} </SOrder>
                    )}
                    <SText>{task.text}</SText>
                </STaskTextarea>
                <>
                    {isDelete ? (
                        <DeleteButton />
                    ) : (
                        <EmptyButton>削除</EmptyButton>
                    )}
                    <NavButton to={`/${task.task_id}` + path.insertTask}>
                        挿入
                    </NavButton>
                    <NavButton to={`/${task.task_id}` + path.editTask}>
                        編集
                    </NavButton>
                </>
            </STaskItemContainer>
        </>
    );
};

const STaskTextarea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SOrder = styled.div`
    margin: 0 5px;
`;

const SText = styled.div`
    text-align: left;
    width: 400px;
`;

const STaskItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const EmptyButton = styled(DefaultButton)`
    visibility: hidden;
`;
