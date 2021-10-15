import { VFC } from "react";
import styled from "styled-components";

import { Task } from "../molecules/task/Task";

import { taskListType } from "../../assets/type/dataType";
import { TaskListButtonArea } from "../molecules/task/TaskListButtonArea";

type propsType = {
    taskList: taskListType;
    priority: number;
};

export const TaskList: VFC<propsType> = (props) => {
    const { taskList, priority } = props;
    const length = taskList.task.length;
    let isDelete = true,
        isInsert = true;
    if (length === 1) {
        isDelete = false;
        isInsert = false;
    }
    return (
        <SComponetContainer>
            <SId>{"優先度:" + (priority + 1) + "　"}</SId>
            <STaskListContainer>
                <Task
                    task={taskList.task[0]}
                    task_list_id={taskList.task_list_id}
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
                                    task_list_id={taskList.task_list_id}
                                    isDelete={true}
                                    isInsert={isInsert}
                                    key={task.task_id}
                                />
                            );
                        })
                        .filter((task, index) => index > 0)}
                </SHiddenDetail>
                <TaskListButtonArea taskList={taskList} />
            </STaskListContainer>
        </SComponetContainer>
    );
};

const SComponetContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const STaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SId = styled.div``;

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
