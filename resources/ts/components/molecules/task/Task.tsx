import { VFC } from "react";
import styled from "styled-components";
import { path } from "../../../assets/data/path";

import { DefaultButton } from "../../atoms/button/DefaultButton";

import { DeleteTaskButton } from "../../atoms/button/DeleteTaskButton";
import { NavButton } from "../../atoms/button/NavButton";

type propsType = {
    task: {
        task_id: number;
        text: string;
    };
    isDelete: boolean;
    isInsert: boolean;
};

export const Task: VFC<propsType> = (props) => {
    const { task, isDelete, isInsert } = props;

    return (
        <>
            <STaskItemContainer>
                <SText>{task.text}</SText>
                <>
                    {isDelete ? (
                        <DeleteTaskButton task={task}>削除</DeleteTaskButton>
                    ) : (
                        <EmptyButton>削除</EmptyButton>
                    )}
                    {isInsert ? (
                        <NavButton to={path.insertTask}>挿入</NavButton>
                    ) : (
                        <EmptyButton>挿入</EmptyButton>
                    )}
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
