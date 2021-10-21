import { VFC } from "react";

import axios from "axios";
import { useSetRecoilState } from "recoil";

import { DefaultButton } from "../../atoms/button/DefaultButton";

import { taskListType } from "../../../assets/type/dataType";
import { taskListsState } from "../../../state/atom";

type propsType = {
    taskList: taskListType;
    children: string;
};

export const DeleteListButton: VFC<propsType> = (props) => {
    const { taskList, children } = props;
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

    const deleteTaskList = async () => {
        try {
            const res = await axios.delete("/api/delete/tasklist", {
                data: { task_list_id: taskList.task_list_id },
            });
            if (res.data.result) {
                console.log("deleteTaskList:タスクの削除に成功しました");
            } else {
                console.log("deleteTaskList:タスクの削除に失敗しました");
            }
            getTaskLists();
        } catch (err) {
            console.log(err);
        }
    };

    return <DefaultButton onClick={deleteTaskList}>{children}</DefaultButton>;
};
