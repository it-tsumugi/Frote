import { useEffect, useState, VFC } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";

import { DefaultTextField } from "../../../atoms/form/DefaultTextField";
import { FormCard } from "../../../atoms/form/FormCard";
import { SActionText } from "../../../atoms/style/TextStyle";

import { path } from "../../../../assets/data/path";
import { errorMessages } from "../../../../assets/data/errorMessages";
import { ActionButton } from "../../../atoms/button/ActionButton";

export const InsertTask: VFC = () => {
    const history = useHistory();
    const [task, setTask] = useState("");
    const { id } = useParams<{ id: string }>();
    const task_id = Number(id);

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

    const insertTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (checkIsSuccess()) {
            try {
                const res = await axios.post("/api/insert/task", {
                    task_id,
                    task,
                });
                if (res.data.result) {
                    console.log("InsertTask:タスクの挿入に成功");
                    window.alert("タスクを挿入しました");
                    history.push(path.home);
                } else {
                    console.log("InsertTask:エラー");
                }
            } catch (err) {
                console.log("InsertTask:エラー");
                console.log(err);
            }
        } else window.alert("入力に問題があります");
    };
    return (
        <>
            <SActionText>追加するタスクを入力してください</SActionText>
            <FormCard>
                <form onSubmit={insertTask}>
                    <DefaultTextField
                        name="task"
                        label="タスク"
                        type="text"
                        error={Boolean(taskError)}
                        helperText={taskError}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <ActionButton type="submit">送信</ActionButton>
                </form>
            </FormCard>
        </>
    );
};
