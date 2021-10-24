import { useEffect, useState, VFC } from "react";
import axios from "axios";
import { useHistory } from "react-router";

import { NavButton } from "../../../atoms/button/NavButton";
import { DefaultTextField } from "../../../atoms/form/DefaultTextField";
import { FormCard } from "../../../atoms/form/FormCard";
import { ActionButton } from "../../../atoms/button/ActionButton";

import { path } from "../../../../assets/data/path";
import { errorMessages } from "../../../../assets/data/errorMessages";
import { SActionText } from "../../../atoms/style/TextStyle";

export const AddGroup: VFC = () => {
    const history = useHistory();
    const [group, setGroup] = useState("");
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

    const sendGroup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checkIsSuccess()) {
            try {
                const res = await axios.post("/api/add/group", {
                    group,
                });
                if (res.data.result) {
                    console.log("AddGroup:グループの追加に成功");
                    window.alert("グループを追加しました");
                    history.push(path.group);
                } else {
                    console.log("AddGroup:グループの追加に失敗");
                    window.alert("既に同名のグループが存在します");
                }
            } catch (err) {
                console.log("AddGroup:エラー");
                console.log(err);
            }
        } else {
            window.alert("入力に問題があります");
        }
    };

    return (
        <>
            <SActionText>追加するグループを入力してください</SActionText>
            <FormCard>
                <form onSubmit={sendGroup}>
                    <DefaultTextField
                        name="group"
                        label="グループ名"
                        type="text"
                        error={Boolean(groupError)}
                        helperText={groupError}
                        onChange={(e) => setGroup(e.target.value)}
                    />
                    <ActionButton type="submit">追加</ActionButton>
                </form>
            </FormCard>
            <NavButton to={path.group}>グループの一覧へ</NavButton>
        </>
    );
};
