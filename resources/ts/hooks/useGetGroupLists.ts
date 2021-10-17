import { useGroupContext } from "../providers/GroupProvider";
import axios from "axios";
import { useEffect } from "react";

import { groupListType } from "../assets/type/dataType";
import { useGroupListsContext } from "../providers/GroupListProvider";

export const useGetGroupLists = () => {
    const { setGroupList } = useGroupListsContext();
    const { setGroup } = useGroupContext();

    const getGroupLists = async () => {
        let dbData: groupListType[] = [];
        try {
            const res = await axios.get("/api/read/grouplist");
            console.log("useGetGroupLists:データ取得に成功しました");
            dbData = res.data.data;
            //groupの初期値の設定
            // if (dbData.length !== 0) setGroup(dbData[0].group);
        } catch (err) {
            console.log("useGetGroupLists:エラー");
            console.log(err);
        }
        setGroupList(dbData);
    };

    useEffect(() => {
        getGroupLists();
    }, []);
};
