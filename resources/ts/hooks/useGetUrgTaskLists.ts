import axios from "axios";
import { useEffect } from "react";

import { urgTaskListsType } from "./../assets/type/dataType";
import { useUrgTaskListsContext } from "../providers/UrgTaskListsProvider";
import { urgData } from "../assets/data/urgData";

export const useGetUrgTaskLists = () => {
    const { setUrgTaskLists } = useUrgTaskListsContext();

    const getTaskLists = async () => {
        let dbData: urgTaskListsType = [
            {
                taskLists: [],
                text: "",
                id: 0,
            },
        ];
        try {
            const res = await axios.post("/api/read/urg-tasklists", {
                urgData,
            });
            console.log("useGetUrgTaskLists:データ取得に成功しました");
            dbData = res.data;
        } catch (err) {
            console.log("useGetUrgTaskLists:エラー");
        }
        setUrgTaskLists(dbData);
    };

    useEffect(() => {
        getTaskLists();
    }, []);
};
