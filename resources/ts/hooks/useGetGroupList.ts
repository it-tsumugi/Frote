import { useGroupContext } from "./../providers/GroupProvider";
import axios from "axios";
import { useEffect } from "react";

import { groupListType } from "../assets/type/dataType";
import { useGroupListContext } from "./../providers/GroupListProvider";

export const useGetGroupList = () => {
    const { setGroupList } = useGroupListContext();
    const { setGroup } = useGroupContext();

    const getGroupList = async () => {
        let dbData: groupListType[] = [];
        try {
            const res = await axios.get("/api/read/grouplist");
            console.log("useGetGroupLists:データ取得に成功しました");
            dbData = res.data.data;
            //groupの初期値の設定
            setGroup(dbData[0].group);
        } catch (err) {
            console.log("Test:接続に失敗");
            console.log(err);
        }
        setGroupList(dbData);
    };

    useEffect(() => {
        getGroupList();
    }, []);
};
