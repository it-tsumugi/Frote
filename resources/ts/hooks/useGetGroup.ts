import axios from "axios";
import { useEffect } from "react";

import { useGroupContext } from "../providers/GroupProvider";

export const useGetGroup = (id: number) => {
    const { setGroup } = useGroupContext();
    const getGroup = async () => {
        let dbData: {
            group: string;
        }[] = [];
        try {
            const res = await axios.get("/api/read/group", {
                params: {
                    id: id,
                },
            });
            console.log("useGetGroup:データ取得に成功しました");
            dbData = res.data.data;
            //groupの初期値の設定
        } catch (err) {
            console.log("useGetGroup:エラー");
            console.log(err);
        }
        setGroup(dbData[0].group);
    };

    useEffect(() => {
        getGroup();
    }, []);
};
