import axios from "axios";
import { VFC } from "react";

import { DefaultButton } from "../../atoms/button/DefaultButton";
import { useSetRecoilState } from "recoil";

import { groupListType } from "../../../assets/type/dataType";
import {
    booleanState,
    groupListsState,
    stringState,
} from "../../../state/atom";
import { booleanStateKey } from "../../../assets/data/stateKey";

type propsType = {
    id: number;
    children: string;
};

export const DeleteGroupButton: VFC<propsType> = (props) => {
    const { id, children } = props;
    const setGroup = useSetRecoilState(stringState("group"));
    const setGroupList = useSetRecoilState(groupListsState);
    const setIsGetGroupLists = useSetRecoilState(
        booleanState(booleanStateKey.isGetGroupLists)
    );

    const getGroupList = async () => {
        let dbData: groupListType[] = [];
        try {
            const res = await axios.get("/api/read/grouplist");
            if (res.data.result) {
                console.log("DeleteGroupButton:データ取得に成功しました");
                dbData = res.data.data;
                //groupの初期値の設定
                setGroup(dbData[0].group);
            } else {
                console.log("useGetGroupLists:データ取得に失敗しました");
            }
        } catch (err) {
            console.log("Test:接続に失敗");
            console.log(err);
        }
        setGroupList(dbData);
        setIsGetGroupLists(true);
    };

    const deleteGroup = async () => {
        try {
            const res = await axios.delete("/api/delete/group", {
                data: { id: id },
            });
            if (res.data.result) {
                console.log("deleteGroup:グループの削除に成功しました");
            } else {
                console.log("deleteGroup:グループの削除に失敗しました");
                window.alert(
                    "そのグループを使用しているリストがあるため削除出来ません"
                );
            }

            await getGroupList();
        } catch (err) {
            console.log(err);
        }
    };

    return <DefaultButton onClick={deleteGroup}>{children}</DefaultButton>;
};
