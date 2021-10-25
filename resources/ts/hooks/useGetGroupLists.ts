import axios from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { groupListType } from "../assets/type/dataType";
import { booleanState, groupListsState, stringState } from "./../state/atom";
import { booleanStateKey } from "../assets/data/stateKey";

export const useGetGroupLists = () => {
    const setGroupList = useSetRecoilState(groupListsState);
    const setGroup = useSetRecoilState(stringState("group"));
    const setIsGetGroupLists = useSetRecoilState(
        booleanState(booleanStateKey.isGetGroupLists)
    );

    const getGroupLists = async () => {
        let dbData: groupListType[] = [];
        try {
            const res = await axios.get("/api/read/grouplist");
            if (res.data.result) {
                console.log("useGetGroupLists:データ取得に成功しました");
                dbData = res.data.data;
                //groupの初期値の設定
                if (dbData.length !== 0) setGroup(dbData[0].group);
            } else {
                console.log("useGetGroupLists:データ取得に失敗しました");
            }
        } catch (err) {
            console.log("useGetGroupLists:エラー");
            console.log(err);
        }
        setGroupList(dbData);
        setIsGetGroupLists(true);
    };

    useEffect(() => {
        getGroupLists();
    }, []);
};
