import axios from "axios";
import { VFC } from "react";

import { DefaultButton } from "../../atoms/button/DefaultButton";

import { DBType } from "../../../assets/type/dataType";
import { convertDefault } from "../../../function/convertDefault";
import { useTaskListsContext } from "../../../providers/TaskListsProvider";

type propsType = {
    task: {
        task_id: number;
        text: string;
    };
    children: string;
};

export const DeleteTaskButton: VFC<propsType> = (props) => {
    const { task, children } = props;
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

    const deleteTask = async () => {
        try {
            const res = await axios.delete("/api/delete/task", {
                data: { task_id: task.task_id },
            });
            if (res.data.result) {
                console.log("deleteTask:タスクの削除に成功しました");
            } else {
                console.log("deleteTask:タスクの削除に失敗しました");
            }

            await getTaskData();
        } catch (err) {
            console.log(err);
        }
    };

    return <DefaultButton onClick={deleteTask}>{children}</DefaultButton>;
};
