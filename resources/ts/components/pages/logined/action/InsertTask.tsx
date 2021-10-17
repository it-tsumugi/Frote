import { useEffect, useState, VFC } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@material-ui/core";

import { path } from "../../../../assets/data/path";

type eventType = {
    e: React.FormEvent<HTMLFormElement>;
};

export const InsertTask: VFC = () => {
    const history = useHistory();
    const [task, setTask] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const { id } = useParams<{ id: string }>();
    const task_id = Number(id);

    useEffect(() => {
        setTask(watch("task"));
    }, [watch("task")]);

    const insertTask: SubmitHandler<eventType> = async ({ e }) => {
        e.preventDefault();

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
    };
    return (
        <>
            <form onSubmit={(e) => handleSubmit(insertTask({ e }))}>
                <h3>追加するタスクを入力してください</h3>
                <textarea
                    rows={2}
                    cols={30}
                    {...register("task", { required: true })}
                    placeholder=""
                />
                {errors.task && "タスクを入力してください"}
                <Button type="submit" color="default" variant="contained">
                    送信
                </Button>
            </form>
        </>
    );
};
