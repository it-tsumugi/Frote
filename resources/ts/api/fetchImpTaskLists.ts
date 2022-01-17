import axios from "axios";
import { impTaskListsType } from "../assets/type/dataType";
import { impData } from "../assets/data/impData";

export const fetchImpTaskLists = async () => {
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
    return dbData;
};