import { VFC } from "react";

import axios from "axios";
import { useSetRecoilState } from "recoil";

import { DefaultButton } from "../../atoms/button/DefaultButton";

import {
    groupTaskListsType,
    taskListType,
} from "../../../assets/type/dataType";
import { groupTaskListsState } from "../../../state/atom";

type propsType = {
    taskList: taskListType;
    children: string;
};

export const DeleteGroupListButton: VFC<propsType> = (props) => {
    const { taskList, children } = props;
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
