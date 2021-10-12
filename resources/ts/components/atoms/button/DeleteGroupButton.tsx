import axios from "axios";
import { VFC } from "react";

import { DefaultButton } from "../../atoms/button/DefaultButton";

import { DBType, groupListType } from "../../../assets/type/dataType";
import { convertDefault } from "../../../function/convertDefault";
import { useTaskListsContext } from "../../../providers/TaskListsProvider";
import { useGroupListContext } from "../../../providers/GroupListProvider";
import { useGroupContext } from "../../../providers/GroupProvider";

type propsType = {
    id: number;
    children: string;
};

export const DeleteGroupButton: VFC<propsType> = (props) => {
    const { id, children } = props;
    const { setGroupList } = useGroupListContext();
    const { setGroup } = useGroupContext();

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
