import { useEffect, useState, VFC } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { useRecoilState } from "recoil";

import { NavButton } from "../../../atoms/button/NavButton";
import { FormCard } from "../../../atoms/form/FormCard";
import { ActionButton } from "../../../atoms/button/ActionButton";
import { DefaultTextField } from "../../../atoms/form/DefaultTextField";

import { path } from "../../../../assets/data/path";
import { useGetGroup } from "../../../../hooks/useGetGroup";
import { stringState } from "../../../../state/atom";
import { errorMessages } from "../../../../assets/data/errorMessages";
import { SActionText } from "../../../atoms/style/TextStyle";
import { stringStateKey } from "../../../../assets/data/stateKey";

export const EditGroup: VFC = () => {
    const { id } = useParams<{ id: string }>();
    const group_id: number = Number(id);
    const [group, setGroup] = useRecoilState(stringState(stringStateKey.group));
    const history = useHistory();
    useGetGroup(group_id, "group");

    const [groupError, setGroupError] = useState("");

    const validateLogin = () => {
        if (group.length === 0) setGroupError(errorMessages.group.blank);
        else if (group.length > 20)
            setGroupError(errorMessages.group.maxLength);
        else setGroupError("");
    };

    const checkIsSuccess = () => {
        if (groupError === "") return true;
        else return false;
    };

    useEffect(() => {
        validateLogin();
    }, [group]);

    const updateGroup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checkIsSuccess()) {
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
        } else {
            window.alert("入力に問題があります");
        }
    };

    return (
        <>
            <SActionText>グループ名を編集してください</SActionText>
            <FormCard>
                <form onSubmit={(e) => updateGroup(e)}>
                    <DefaultTextField
                        name="group"
                        value={group}
                        label="グループ名"
                        type="text"
                        error={Boolean(groupError)}
                        helperText={groupError}
                        onChange={(e) => setGroup(e.target.value)}
                    />
                    <ActionButton type="submit">決定</ActionButton>
                </form>
            </FormCard>
            <NavButton to={path.group}>グループの一覧</NavButton>
        </>
    );
};
