import axios from "axios";
import { VFC } from "react";
import { useSetRecoilState } from "recoil";

import { DefaultButton } from "../../atoms/button/DefaultButton";

import { impTaskListsType, taskType } from "../../../assets/type/dataType";
import { impTaskListsState } from "../../../state/atom";
import { impData } from "../../../assets/data/impData";

type propsType = {
    task: taskType;
    task_list_id: number;
    children: string;
};

export const DeleteImpTaskButton: VFC<propsType> = (props) => {
    const { task, children, task_list_id } = props;
    const setImpTaskLists = useSetRecoilState(impTaskListsState);

    const getTaskLists = async () => {
        let dbData: impTaskListsType = [
            {
                taskLists: [],
                text: "",
                id: 0,
            },
        ];
        try {
            const res = await axios.post("/api/read/imp-tasklists", {
                impData,
            });
            console.log("DeleteImpTaskButton:データ取得に成功しました");
            dbData = res.data;
        } catch (err) {
            console.log("DeleteImpTaskButton:エラー");
            console.log(err);
        }
        setImpTaskLists(dbData);
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
