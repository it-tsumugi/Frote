import axios from "axios";
import { VFC } from "react";
import { useHistory, useParams } from "react-router";
import { useRecoilValue } from "recoil";

import { GroupSelect } from "../../../molecules/select/GroupSelect";
import { ImpSelect } from "../../../molecules/select/ImpSelect";
import { UrgSelect } from "../../../molecules/select/UrgSelect";
import { SActionText } from "../../../atoms/style/TextStyle";
import { FormCard } from "../../../atoms/form/FormCard";
import { ActionButton } from "../../../atoms/button/ActionButton";

import { path } from "../../../../assets/data/path";
import { numberState, stringState } from "../../../../state/atom";
import styled from "styled-components";

export const EditSelectParams: VFC = () => {
    const { id } = useParams<{ id: string }>();
    const task_list_id = Number(id);
    const imp = useRecoilValue(numberState("imp"));
    const urg = useRecoilValue(numberState("urg"));
    const group = useRecoilValue(stringState("group"));

    const history = useHistory();
    const updateSelectParams = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.put("/api/put/select-params", {
                task_list_id,
                group,
                imp,
                urg,
            });
            if (res.data.result) {
                console.log(
                    "updateSelectParams:セレクトパラメータの更新に成功"
                );
                window.alert("リストを更新しました");
                history.push(path.home);
            } else {
                console.log(
                    "updateSelectParams:セレクトパラメータの更新に失敗"
                );
            }
        } catch (err) {
            console.log("updateSelectParams:エラー");
            console.log(err);
        }
    };

    return (
        <>
            <SActionText>リストを編集してください</SActionText>
            <FormCard>
                <SForm onSubmit={(e) => updateSelectParams(e)}>
                    <ImpSelect task_list_id={task_list_id} />
                    <UrgSelect task_list_id={task_list_id} />
                    <GroupSelect task_list_id={task_list_id} />
                    <ActionButton type="submit">更新</ActionButton>
                </SForm>
            </FormCard>
        </>
    );
};

const SForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
