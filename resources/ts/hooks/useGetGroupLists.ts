import axios from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { groupListType } from "../assets/type/dataType";
import { groupListsState, stringState } from "./../state/atom";

export const useGetGroupLists = () => {
    const setGroupList = useSetRecoilState(groupListsState);
    const setGroup = useSetRecoilState(stringState("group"));
    const getGroupLists = async () => {
        let dbData: groupListType[] = [];
        try {
            const res = await axios.get("/api/read/grouplist");
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
        getGroupLists();
    }, []);
};
