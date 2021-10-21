import axios from "axios";
import { VFC } from "react";

import { DefaultButton } from "../../atoms/button/DefaultButton";
import { useSetRecoilState } from "recoil";

import { groupListType } from "../../../assets/type/dataType";
import { groupListsState, stringState } from "../../../state/atom";

type propsType = {
    id: number;
    children: string;
};

export const DeleteGroupButton: VFC<propsType> = (props) => {
    const { id, children } = props;
    const setGroup = useSetRecoilState(stringState("group"));
    const setGroupList = useSetRecoilState(groupListsState);

    const getGroupList = async () => {
        let dbData: groupListType[] = [];
        try {
            const res = await axios.get("/api/read/grouplist");
            console.log("DeleteGroupButton:データ取得に成功しました");
            dbData = res.data.data;
            //groupの初期値の設定
            setGroup(dbData[0].group);
        } catch (err) {
            console.log("Test:接続に失敗");
            console.log(err);
        }
        setGroupList(dbData);
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
