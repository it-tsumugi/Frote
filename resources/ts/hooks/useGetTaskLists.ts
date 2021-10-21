import axios from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { taskListType } from "../assets/type/dataType";
import { taskListsState } from "../state/atom";

export const useGetTaskLists = () => {
    const setTaskLists = useSetRecoilState(taskListsState);

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
