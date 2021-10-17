import axios from "axios";
import { useEffect } from "react";

import { impData } from "../assets/data/impData";
import { impTaskListsType } from "./../assets/type/dataType";
import { useImpTaskListsContext } from "../providers/ImpTaskListsProvider";

export const useGetImpTaskLists = () => {
    const { setImpTaskLists } = useImpTaskListsContext();

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
            console.log("useGetImpTaskLists:データ取得に成功しました");
            dbData = res.data;
        } catch (err) {
            console.log("useGetImpTaskLists:エラー");
            console.log(err);
        }
        setImpTaskLists(dbData);
    };

    useEffect(() => {
        getTaskLists();
    }, []);
};
