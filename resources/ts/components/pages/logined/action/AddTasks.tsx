import { VFC } from "react";
import styled from "styled-components";
import axios from "axios";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";

import { Button } from "@material-ui/core";

import { getTaskListLength } from "../../../../function/getTaskListLength";

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
    const length = getTaskListLength(task_list_id);
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
            <SColumnContainer>
                <h3>タスクの内容</h3>
                {fields.map((field, index) => (
                    <div key={field.id}>
                        <SFlexContainer>
                            <SColumnContainer>
                                <span>{"タスク" + (index + 1)}</span>
                                <textarea
                                    rows={2}
                                    cols={30}
                                    {...register(
                                        `tasks.${index}.task` as const
                                    )}
                                    placeholder="タスク内容を入力してください"
                                ></textarea>
                            </SColumnContainer>
                            {index > 0 ? (
                                <>
                                    <Button
                                        type="button"
                                        color="default"
                                        variant="contained"
                                        onClick={() => remove(index)}
                                    >
                                        削除
                                    </Button>
                                    <Button
                                        type="button"
                                        color="default"
                                        variant="contained"
                                        onClick={() => insert(index + 1, {})}
                                    >
                                        挿入
                                    </Button>
                                </>
                            ) : null}
                        </SFlexContainer>
                    </div>
                ))}
                <Button
                    style={{ width: "100px" }}
                    type="button"
                    color="default"
                    variant="contained"
                    onClick={() => {
                        if (fields.length < 10 - length) append({});
                        else
                            window.alert(
                                "リストが持てるタスクは１０個までです"
                            );
                    }}
                >
                    タスクの追加
                </Button>
            </SColumnContainer>
            <Button
                type="submit"
                color="default"
                variant="contained"
                style={{ marginTop: "20px" }}
            >
                送信
            </Button>
        </form>
    );
};

const SColumnContainer = styled.div`
    display: flex;
    flex-flow: column;
`;

const SFlexContainer = styled.div`
    display: flex;
`;
