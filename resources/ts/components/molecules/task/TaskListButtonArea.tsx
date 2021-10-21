import { VFC } from "react";
import styled from "styled-components";

import { NavButton } from "../../atoms/button/NavButton";
import { DeleteListButton } from "../../atoms/button/DeleteListButton";
import { DefaultButton } from "../../atoms/button/DefaultButton";

import { path } from "../../../assets/data/path";
import { taskListType } from "../../../assets/type/dataType";

type propsType = {
    taskList: taskListType;
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TaskListButtonArea: VFC<propsType> = (props) => {
    const { taskList, isChecked, setIsChecked } = props;
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

                <DeleteListButton taskList={taskList}>
                    リストを削除
                </DeleteListButton>
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
