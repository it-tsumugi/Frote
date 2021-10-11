import { VFC } from "react";
import styled from "styled-components";

import { Task } from "../atoms/task/Task";

import { taskListType } from "../../assets/type/dataType";
import { TaskListButtonArea } from "../molecules/task/TaskListButtonArea";

type propsType = {
    taskList: taskListType;
};

export const TaskList: VFC<propsType> = (props) => {
    const { taskList } = props;
    const length = taskList.task.length;
    let isDelete = true,
        isInsert = true;
    if (length === 1) {
        isDelete = false;
        isInsert = false;
    }
    return (
        <SComponetContainer>
            <Task
                task={taskList.task[0]}
                isDelete={isDelete}
                isInsert={isInsert}
            />
            <SInput type="Checkbox" id={"test" + taskList.task_list_id} />
            <SHiddenDetail className="HiddenDetail">
                {taskList.task
                    .map((task, index) => {
                        if (index + 1 === length) {
                            isInsert = false;
                        }
                        return (
                            <Task
                                task={task}
                                isDelete={true}
                                isInsert={isInsert}
                                key={task.task_id}
                            />
                        );
                    })
                    .filter((task, index) => index > 0)}
            </SHiddenDetail>
            <TaskListButtonArea taskList={taskList} />
        </SComponetContainer>
    );
};

const SComponetContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SHiddenDetail = styled.div`
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: 0.8s;
    width: 100%;
    border-radius: 5px 5px 5px 5px;
    box-sizing: border-box;
`;

const SInput = styled.input`
    display: none;
    :checked ~ .HiddenDetail {
        height: auto;
        opacity: 1;
    }
`;
