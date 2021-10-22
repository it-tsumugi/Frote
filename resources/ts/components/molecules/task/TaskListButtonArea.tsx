import { VFC } from "react";
import styled from "styled-components";

import { NavButton } from "../../atoms/button/NavButton";
import { DeleteListButton } from "../../atoms/button/DeleteListButton";
import { DefaultButton } from "../../atoms/button/DefaultButton";

import { path } from "../../../assets/data/path";
import { taskListType } from "../../../assets/type/dataType";
import { DeleteGroupListButton } from "../../atoms/button/DeleteGroupListButton";
import { DeleteUrgListButton } from "../../atoms/button/DeleteUrgListButton";
import { DeleteImpListButton } from "../../atoms/button/DeleteImpListButton";

type propsType = {
    taskList: taskListType;
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    taskType: string;
};

export const TaskListButtonArea: VFC<propsType> = (props) => {
    const { taskList, isChecked, setIsChecked, taskType } = props;

    const DeleteButton: VFC = () => {
        if (taskType === "task") {
            return (
                <DeleteListButton taskList={taskList}>
                    リストを削除
                </DeleteListButton>
            );
        } else if (taskType === "imp") {
            return (
                <DeleteImpListButton taskList={taskList}>
                    リストを削除
                </DeleteImpListButton>
            );
        } else if (taskType === "urg") {
            return (
                <DeleteUrgListButton taskList={taskList}>
                    リストを削除
                </DeleteUrgListButton>
            );
        } else if (taskType === "group") {
            return (
                <DeleteGroupListButton taskList={taskList}>
                    リストを削除
                </DeleteGroupListButton>
            );
        } else {
            return null;
        }
    };
    return (
        <>
            <SComponentContainer>
                {taskList.task.length > 1 ? (
                    <DefaultButton onClick={() => setIsChecked(!isChecked)}>
                        {isChecked ? "閉じる" : "すべて表示"}
                    </DefaultButton>
                ) : (
                    <SEmpty>すべて表示</SEmpty>
                )}
                <DeleteButton />
                <NavButton to={`/${taskList.task_list_id}` + path.editTaskList}>
                    リストを編集
                </NavButton>
                {taskList.task.length < 20 ? (
                    <NavButton to={`/${taskList.task_list_id}` + path.addTasks}>
                        末尾にタスクを追加
                    </NavButton>
                ) : (
                    <SEmpty>末尾にタスクを追加</SEmpty>
                )}
            </SComponentContainer>
        </>
    );
};

const SComponentContainer = styled.div`
    display: flex;
`;

const SEmpty = styled(DefaultButton)`
    visibility: hidden;
`;
