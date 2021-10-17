import axios from "axios";
import { useEffect } from "react";

import { useImpContext } from "./../providers/ImpProvider";

export const useGetImp = (id: number) => {
    const { setImp } = useImpContext();

    const getImp = async () => {
        let dbData: {
            importance: number;
        } = { importance: 0 };
        try {
            const res = await axios.get("/api/read/imp", {
                params: {
                    task_list_id: id,
                },
            });
            console.log("useGetImp:データ取得に成功しました");
            dbData = res.data;
        } catch (err) {
            console.log("useGetImp:エラー");
            console.log(err);
        }
        setImp(dbData.importance);
    };

    useEffect(() => {
        if (id !== -1) getImp();
    }, []);
};
