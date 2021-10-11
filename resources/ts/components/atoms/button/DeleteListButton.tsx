import { VFC } from "react";

import axios from "axios";

import { DefaultButton } from "../../atoms/button/DefaultButton";

import { DBType, taskListType } from "../../../assets/type/dataType";
import { useTaskListsContext } from "../../../providers/TaskListsProvider";
import { convertDefault } from "../../../function/convertDefault";

type propsType = {
    taskList: taskListType;
    children: string;
};

export const DeleteListButton: VFC<propsType> = (props) => {
    const { taskList, children } = props;
    const { setTaskLists } = useTaskListsContext();

    const getTaskData = async () => {
        let dbData: DBType[] = [];
        try {
            const res = await axios.get("/api/test");
            console.log("getTaskData:データ取得に成功しました");
            dbData = res.data.data;
        } catch (err) {
            console.log("Test:接続に失敗");
            console.log(err);
        }
        const result = convertDefault(dbData);
        setTaskLists(result);
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
            getTaskData();
        } catch (err) {
            console.log(err);
        }
    };

    return <DefaultButton onClick={deleteTaskList}>{children}</DefaultButton>;
};
