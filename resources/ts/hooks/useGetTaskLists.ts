import axios from "axios";
import { useEffect } from "react";

import { DBType, taskListType } from "../assets/type/dataType";
import { convertDefault } from "../function/convertDefault";
import { useTaskListsContext } from "../providers/TaskListsProvider";

export const useGetTaskLists = () => {
    const { setTaskLists } = useTaskListsContext();

    const getTaskLists = async () => {
        let dbData: DBType[] = [];
        try {
            const res = await axios.get("/api/read/tasklists");
            console.log("useGetTaskLists:データ取得に成功しました");
            dbData = res.data.data;
        } catch (err) {
            console.log("Test:接続に失敗");
            console.log(err);
        }
        const result: taskListType[] = convertDefault(dbData);
        setTaskLists(result);
    };

    useEffect(() => {
        getTaskLists();
    }, []);
};
