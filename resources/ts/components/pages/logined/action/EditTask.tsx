import axios from "axios";
import { useEffect, useState, VFC } from "react";
import { useHistory, useParams } from "react-router";
import { useRecoilState } from "recoil";

import { FormCard } from "../../../atoms/form/FormCard";
import { DefaultTextField } from "../../../atoms/form/DefaultTextField";
import { ActionButton } from "../../../atoms/button/ActionButton";
import { SActionText } from "../../../atoms/style/TextStyle";

import { path } from "../../../../assets/data/path";
import { useGetTask } from "../../../../hooks/useGetTask";
import { stringState } from "../../../../state/atom";
import { errorMessages } from "../../../../assets/data/errorMessages";
import { stringStateKey } from "../../../../assets/data/stateKey";

export const EditTask: VFC = () => {
    const { id } = useParams<{ id: string }>();
    const task_id = Number(id);
    const [task, setTask] = useRecoilState(stringState(stringStateKey.task));
    const history = useHistory();
    useGetTask(task_id);

    const [taskError, setTaskError] = useState("");

    const validateLogin = () => {
        if (task.length === 0) setTaskError(errorMessages.task.blank);
        else if (task.length > 20) setTaskError(errorMessages.task.maxLength);
        else setTaskError("");
    };

    const checkIsSuccess = () => {
        if (taskError === "") return true;
        else return false;
    };

    useEffect(() => {
        validateLogin();
    }, [task]);

    const updateTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checkIsSuccess()) {
            try {
                const res = await axios.put("/api/put/task", {
                    task_id,
                    task,
                });
                if (res.data.result) {
                    console.log("updateTask:タスクの更新に成功");
                    window.alert("グループを更新しました");
                    history.push({ pathname: path.home });
                } else {
                    console.log("updateTask:タスクの追加に失敗");
                }
            } catch (err) {
                console.log("updateTask:接続に失敗");
                console.log(err);
            }
        } else window.alert("入力に問題があります");
    };

    return (
        <>
            <SActionText>タスクを編集してください</SActionText>
            <FormCard>
                <form onSubmit={(e) => updateTask(e)}>
                    <DefaultTextField
                        value={task}
                        name="task"
                        label="タスク"
                        type="text"
                        error={Boolean(taskError)}
                        helperText={taskError}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <ActionButton type="submit">更新</ActionButton>
                </form>
            </FormCard>
        </>
    );
};
