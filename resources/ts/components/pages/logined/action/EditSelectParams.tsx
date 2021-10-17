import { Button } from "@material-ui/core";
import axios from "axios";
import { VFC } from "react";
import { useHistory, useParams } from "react-router";

import { GroupSelect } from "../../../molecules/select/GroupSelect";
import { ImpSelect } from "../../../molecules/select/ImpSelect";
import { UrgSelect } from "../../../molecules/select/UrgSelect";

import { path } from "../../../../assets/data/path";
import { useGroupContext } from "../../../../providers/GroupProvider";
import { useImpContext } from "../../../../providers/ImpProvider";
import { useUrgContext } from "../../../../providers/UrgProvider";

export const EditSelectParams: VFC = () => {
    const { id } = useParams<{ id: string }>();
    const task_list_id = Number(id);
    const { group } = useGroupContext();
    const { imp } = useImpContext();
    const { urg } = useUrgContext();
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
            <form onSubmit={(e) => updateSelectParams(e)}>
                <h3>リストを編集してください</h3>
                <ImpSelect task_list_id={task_list_id} />
                <UrgSelect task_list_id={task_list_id} />
                <GroupSelect task_list_id={task_list_id} />
                <Button type="submit" color="default" variant="contained">
                    更新
                </Button>
            </form>
        </>
    );
};
