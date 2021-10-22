import { VFC } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { useRecoilState } from "recoil";

import { Button } from "@material-ui/core";

import { NavButton } from "../../../atoms/button/NavButton";

import { path } from "../../../../assets/data/path";
import { useGetGroup } from "../../../../hooks/useGetGroup";
import { stringState } from "../../../../state/atom";

export const EditGroup: VFC = () => {
    const { id } = useParams<{ id: string }>();
    const group_id: number = Number(id);
    const [group, setGroup] = useRecoilState(stringState("group"));
    const history = useHistory();
    useGetGroup(group_id, "group");

    const updateGroup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.put("/api/put/group", {
                id,
                group,
            });
            if (res.data.result) {
                console.log("updateGroup:グループの更新に成功");
                window.alert("グループを更新しました");
                history.push({ pathname: "/group" });
            } else {
                console.log("updateGroup:グループの追加に失敗");
                window.alert("同名のグループが既に存在します");
            }
        } catch (err) {
            console.log("updateGroup:接続に失敗");
            console.log(err);
        }
    };

    return (
        <>
            <form onSubmit={(e) => updateGroup(e)}>
                <h3>グループ名を編集してください</h3>
                <input
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                />
                <Button type="submit" color="default" variant="contained">
                    決定
                </Button>
            </form>
            <NavButton to={path.group}>グループの一覧</NavButton>
        </>
    );
};
