import { VFC } from "react";

import axios from "axios";
import { useSetRecoilState } from "recoil";

import { DefaultButton } from "../../atoms/button/DefaultButton";

import { impTaskListsType, taskListType } from "../../../assets/type/dataType";
import { impTaskListsState } from "../../../state/atom";
import { impData } from "../../../assets/data/impData";

type propsType = {
    taskList: taskListType;
    children: string;
};

export const DeleteImpListButton: VFC<propsType> = (props) => {
    const { taskList, children } = props;
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
