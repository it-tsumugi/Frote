import axios from "axios";
import { useEffect } from "react";

import { taskListType } from "../assets/type/dataType";
import { useTaskListsContext } from "../providers/TaskListsProvider";

export const useGetTaskLists = () => {
    const { setTaskLists } = useTaskListsContext();

    const getTaskLists = async () => {
        let dbData: taskListType[] = [];
        try {
            const res = await axios.get("/api/read/tasklists");
            console.log("useGetTaskLists:データ取得に成功しました");
            dbData = res.data.data;
        } catch (err) {
            console.log("useGetTaskLists:エラー");
            console.log(err);
        }
        setTaskLists(dbData);
    };

    useEffect(() => {
        getTaskLists();
    }, []);
};
