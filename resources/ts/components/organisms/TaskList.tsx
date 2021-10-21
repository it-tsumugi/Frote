import { useState, VFC } from "react";
import styled from "styled-components";

import { Task } from "../molecules/task/Task";

import { taskListType } from "../../assets/type/dataType";
import { TaskListButtonArea } from "../molecules/task/TaskListButtonArea";

type propsType = {
    taskList: taskListType;
    priority: number;
};

type SHiddenDetailPropsType = {
    isChecked: boolean;
};

export const TaskList: VFC<propsType> = (props) => {
    const { taskList, priority } = props;
    const length = taskList.task.length;
    const [isChecked, setIsChecked] = useState(false);

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
                    index={0}
                />
                <SHiddenDetail isChecked={isChecked}>
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
                                    index={index}
                                    key={task.task_id}
                                />
                            );
                        })
                        .filter((task, index) => index > 0)}
                </SHiddenDetail>
                <TaskListButtonArea
                    taskList={taskList}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                />
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

const SHiddenDetail = styled.div<SHiddenDetailPropsType>`
    overflow: hidden;
    transition: 0.8s;

    height: ${(props) => (props.isChecked ? "auto" : 0)};
    opacity: ${(props) => (props.isChecked ? 1 : 0)};
`;
