import { useState, VFC } from "react";
import axios from "axios";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";

import { AddTaskArea } from "../../../organisms/AddTaskArea";
import { ActionButton } from "../../../atoms/button/ActionButton";
import { FormCard } from "../../../atoms/form/FormCard";
import { SActionText } from "../../../atoms/style/TextStyle";

type FormData = {
    tasks: {
        task: string;
    }[];
};

type dataType = {
    e: React.BaseSyntheticEvent<object, any, any> | undefined;
    data: FormData;
};

export const AddTasks: VFC = () => {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();
    const task_list_id: number = Number(id);
    const { control, register, handleSubmit } = useForm<FormData>({
        defaultValues: {
            tasks: [{ task: "" }],
        },
    });
    const { fields, append, remove, insert } = useFieldArray({
        control,
        name: "tasks",
    });
    const [isComplete, setIsComplete] = useState(false);

    const onClick = () => {
        setIsComplete(true);
    };

    const addTasks: SubmitHandler<dataType> = async ({ e, data }) => {
        const tasks = data.tasks;
        e?.preventDefault();
        if (isComplete) {
            try {
                const res = await axios.post("/api/add/tasks", {
                    task_list_id,
                    tasks,
                });
                if (res.data.result) {
                    console.log("AddTasks:タスクの追加に成功");
                    window.alert("タスクを追加しました");
                    history.push({ pathname: "/home" });
                } else {
                    window.alert(
                        "すべてのタスクは１文字以上３０文字以下である必要があります"
                    );
                    setIsComplete(false);
                    console.log("AddTasksタスクの追加に失敗");
                }
            } catch (err) {
                console.log("AddTasks:接続に失敗");
                console.log(err);
            }
        }
    };

    return (
        <>
            <SActionText>タスクを追加してください</SActionText>
            <FormCard>
                <SForm
                    onSubmit={handleSubmit((data, e) => addTasks({ e, data }))}
                >
                    <AddTaskArea
                        fields={fields}
                        append={append}
                        remove={remove}
                        insert={insert}
                        register={register}
                    />
                    <ActionButton type="submit" onClick={onClick}>
                        決定
                    </ActionButton>
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
