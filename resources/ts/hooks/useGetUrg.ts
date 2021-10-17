import axios from "axios";
import { useEffect } from "react";

import { useUrgContext } from "./../providers/UrgProvider";

export const useGetUrg = (id: number) => {
    const { setUrg } = useUrgContext();

    const getUrg = async () => {
        let dbData: {
            urgency: number;
        } = { urgency: 0 };
        try {
            const res = await axios.get("/api/read/urg", {
                params: {
                    task_list_id: id,
                },
            });
            console.log("useGetUrg:データ取得に成功しました");
            dbData = res.data;
        } catch (err) {
            console.log("useGetUrg:エラー");
            console.log(err);
        }
        setUrg(dbData.urgency);
    };

    useEffect(() => {
        if (id !== -1) getUrg();
    }, []);
};
