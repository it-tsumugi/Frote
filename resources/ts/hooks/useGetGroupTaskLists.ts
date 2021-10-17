import axios from "axios";
import { useEffect } from "react";

import { useGroupTaskListsContext } from "../providers/GroupTaskListsProvider";
import { groupTaskListsType } from "./../assets/type/dataType";

export const useGetGroupTaskLists = () => {
    const { setGroupTaskLists } = useGroupTaskListsContext();

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

    useEffect(() => {
        getTaskLists();
    }, []);
};
