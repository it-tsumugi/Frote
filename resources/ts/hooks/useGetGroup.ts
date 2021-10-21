import axios from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { stringState } from "../state/atom";

export const useGetGroup = (id: number, key: "group" | "task_list") => {
    const setGroup = useSetRecoilState(stringState("group"));

    const getGroup = async () => {
        let dbData: {
            group: string;
        } = { group: "" };
        try {
            const res = await axios.get("/api/read/group", {
                params: {
                    id: id,
                    key: key,
                },
            });
            console.log("useGetGroup:データ取得に成功しました");
            dbData = res.data.data;
        } catch (err) {
            console.log("useGetGroup:エラー");
            console.log(err);
        }
        setGroup(dbData.group);
    };

    useEffect(() => {
        if (id !== -1) getGroup();
    }, []);
};
