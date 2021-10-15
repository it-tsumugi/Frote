import axios from "axios";
import { useEffect } from "react";
import { taskType } from "../assets/type/dataType";

import { useTaskContext } from "../providers/TaskProvider";

export const useGetTask = (task_id: number) => {
    const { setTask } = useTaskContext();
    const getTasks = async () => {
        let dbData: {
            task: string;
        }[] = [];
        try {
            const res = await axios.get("/api/read/task", {
                params: {
                    task_id: task_id,
                },
            });
            console.log("useGetTask:データ取得に成功しました");
            dbData = res.data.data;
        } catch (err) {
            console.log("useGetTask:エラー");
            console.log(err);
        }
        setTask(dbData[0].task);
    };

    useEffect(() => {
        getTasks();
    }, []);
};