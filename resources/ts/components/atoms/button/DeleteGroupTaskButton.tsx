import axios from "axios";
import { VFC } from "react";
import { useSetRecoilState } from "recoil";

import { DefaultButton } from "../../atoms/button/DefaultButton";

import { groupTaskListsType, taskType } from "../../../assets/type/dataType";
import { groupTaskListsState } from "../../../state/atom";

type propsType = {
    task: taskType;
    task_list_id: number;
    children: string;
};

export const DeleteGroupTaskButton: VFC<propsType> = (props) => {
    const { task, children, task_list_id } = props;
    const setGroupTaskLists = useSetRecoilState(groupTaskListsState);

    const getTaskLists = async () => {
        let dbData: groupTaskListsType = [
            {
                taskLists: [],
                group: "",
                group_id: -1,
            },
        ];
        try {
            const res = await axios.get("/api/read/group-tasklists");
            console.log("useGetGroupTaskLists:データ取得に成功しました");
            dbData = res.data;
        } catch (err) {
            console.log("useGetGroupTaskLists:エラー");
            console.log(err);
        }
        setGroupTaskLists(dbData);
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
