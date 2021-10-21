import axios from "axios";
import { VFC } from "react";
import { useSetRecoilState } from "recoil";

import { DefaultButton } from "../../atoms/button/DefaultButton";

import { taskListType, taskType } from "../../../assets/type/dataType";
import { taskListsState } from "../../../state/atom";

type propsType = {
    task: taskType;
    task_list_id: number;
    children: string;
};

export const DeleteTaskButton: VFC<propsType> = (props) => {
    const { task, children, task_list_id } = props;
    const setTaskLists = useSetRecoilState(taskListsState);

    const getTaskLists = async () => {
        let dbData: taskListType[] = [];
        try {
            const res = await axios.get("/api/read/tasklists");
            console.log("DeleteTaskButton:データ取得に成功しました");
            dbData = res.data.data;
        } catch (err) {
            console.log("Test:エラー");
            console.log(err);
        }
        setTaskLists(dbData);
    };

    const deleteTask = async () => {
        const order: number = task.order;
        try {
            const res = await axios.delete("/api/delete/task", {
                data: {
                    task_id: task.task_id,
                    task_list_id: task_list_id,
                    order: order,
                },
            });
            if (res.data.result) {
                console.log("deleteTask:タスクの削除に成功しました");
            } else {
                console.log("deleteTask:タスクの削除に失敗しました");
            }
            await getTaskLists();
        } catch (err) {
            console.log(err);
        }
    };

    return <DefaultButton onClick={deleteTask}>{children}</DefaultButton>;
};
