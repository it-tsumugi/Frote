import { useState, VFC } from "react";
import styled from "styled-components";

import { Task } from "../molecules/task/Task";

import { taskListType } from "../../assets/type/dataType";
import { TaskListButtonArea } from "../molecules/task/TaskListButtonArea";
import { SText } from "../atoms/style/TextStyle";
import media from "../../assets/styles/media";

type propsType = {
    taskList: taskListType;
    priority: number;
    taskType: string;
};

type SHiddenDetailPropsType = {
    isChecked: boolean;
};

export const TaskList: VFC<propsType> = (props) => {
    const { taskList, priority, taskType } = props;
    const length = taskList.task.length;
    const [isChecked, setIsChecked] = useState(false);

    let isDelete = true;
    if (length === 1) {
        isDelete = false;
    }
    return (
        <SComponetContainer>
            <STaskListContainer>
                <SText>{"優先度:" + (priority + 1) + "　"}</SText>
                <Task
                    task={taskList.task[0]}
                    task_list_id={taskList.task_list_id}
                    isDelete={isDelete}
                    index={0}
                    taskType={taskType}
                />
                <SHiddenDetail isChecked={isChecked}>
                    {taskList.task
                        .map((task, index) => {
                            return (
                                <Task
                                    task={task}
                                    task_list_id={taskList.task_list_id}
                                    isDelete={true}
                                    index={index}
                                    key={task.task_id}
                                    taskType={taskType}
                                />
                            );
                        })
                        .filter((task, index) => index > 0)}
                </SHiddenDetail>
                <TaskListButtonArea
                    taskList={taskList}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                    taskType={taskType}
                />
            </STaskListContainer>
        </SComponetContainer>
    );
};

const SComponetContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const STaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SHiddenDetail = styled.div<SHiddenDetailPropsType>`
    overflow: hidden;
    transition: 0.8s;

    height: ${(props) => (props.isChecked ? "auto" : 0)};
    opacity: ${(props) => (props.isChecked ? 1 : 0)};
`;
