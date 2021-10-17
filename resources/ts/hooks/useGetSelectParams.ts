import { useGroupContext } from "../providers/GroupProvider";
import axios from "axios";
import { useEffect } from "react";

import { groupListType } from "../assets/type/dataType";
import { useGroupListsContext } from "../providers/GroupListProvider";

export const useGetSelectParams = () => {
    const { setGroupList } = useGroupListsContext();
    const { setGroup } = useGroupContext();

    const getSelectParams = async () => {
        let dbData: groupListType[] = [];
        try {
            const res = await axios.get("/api/read/select-params");
            console.log("useGetGroupLists:データ取得に成功しました");
            dbData = res.data.data;
            //groupの初期値の設定
            if (dbData.length !== 0) setGroup(dbData[0].group);
        } catch (err) {
            console.log("useGetGroupLists:エラー");
            console.log(err);
        }
        setGroupList(dbData);
    };

    useEffect(() => {
        getSelectParams();
    }, []);
};
