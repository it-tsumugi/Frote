import { VFC } from "react";
import axios from "axios";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";

import { AddTaskArea } from "../../../organisms/AddTaskArea";
import { ActionButton } from "../../../atoms/button/ActionButton";

type FormData = {
    tasks: {
        task: string;
    }[];
};

type dataType = {
    // e: React.FormEvent<HTMLFormElement>;
    //型が不明
    e: any;
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

    const addTasks: SubmitHandler<dataType> = async ({ e, data }) => {
        const tasks = data.tasks;
        e.preventDefault();

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
                console.log("AddTasksタスクの追加に失敗");
            }
        } catch (err) {
            console.log("AddTasks:接続に失敗");
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit((data, e) => addTasks({ e, data }))}>
            <AddTaskArea
                fields={fields}
                append={append}
                remove={remove}
                insert={insert}
                register={register}
            />
            <ActionButton>送信</ActionButton>
        </form>
    );
};
