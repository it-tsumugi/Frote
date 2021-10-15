import { VFC } from "react";
import styled from "styled-components";
import { path } from "../../../assets/data/path";
import { taskType } from "../../../assets/type/dataType";

import { DefaultButton } from "../../atoms/button/DefaultButton";

import { DeleteTaskButton } from "../../atoms/button/DeleteTaskButton";
import { NavButton } from "../../atoms/button/NavButton";

type propsType = {
    task: taskType;
    task_list_id: number;
    isDelete: boolean;
    isInsert: boolean;
};

export const Task: VFC<propsType> = (props) => {
    const { task, task_list_id, isDelete, isInsert } = props;
    return (
        <>
            <STaskItemContainer>
                <SText>{task.text}</SText>
                <>
                    {isDelete ? (
                        <DeleteTaskButton
                            task={task}
                            task_list_id={task_list_id}
                        >
                            削除
                        </DeleteTaskButton>
                    ) : (
                        <EmptyButton>削除</EmptyButton>
                    )}
                    {isInsert ? (
                        <NavButton to={`/${task.task_id}` + path.insertTask}>
                            挿入
                        </NavButton>
                    ) : (
                        <EmptyButton>挿入</EmptyButton>
                    )}
                    <NavButton to={`/${task.task_id}` + path.editTask}>
                        編集
                    </NavButton>
                </>
            </STaskItemContainer>
        </>
    );
};

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
