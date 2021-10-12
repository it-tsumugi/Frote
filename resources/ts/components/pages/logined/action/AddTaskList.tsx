import { VFC } from "react";
import styled from "styled-components";
import axios from "axios";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useHistory } from "react-router";

import { Button } from "@material-ui/core";

import { useImpContext } from "../../../../providers/ImpProvider";
import { useUrgContext } from "../../../../providers/UrgProvider";
import { useGroupContext } from "../../../../providers/GroupProvider";
import { ImpSelect } from "../../../molecules/select/ImpSelect";
import { UrgSelect } from "../../../molecules/select/UrgSelect";
import { GroupSelect } from "../../../molecules/select/GroupSelect";

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

export const AddTaskList: VFC = () => {
    const { imp } = useImpContext();
    const { urg } = useUrgContext();
    const { group } = useGroupContext();

    const history = useHistory();

    const { control, register, handleSubmit } = useForm<FormData>({
        defaultValues: {
            tasks: [{ task: "" }],
        },
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "tasks",
    });

    const sendTasks: SubmitHandler<dataType> = async ({ e, data }) => {
        const tasks = data.tasks;
        e.preventDefault();

        try {
            const res = await axios.post("/api/add/tasks", {
                tasks,
                imp,
                urg,
                group,
            });
            if (res.data.result) {
                console.log("AddTask:タスクの追加に成功");
                window.alert("タスクを追加しました");
                history.push({ pathname: "/home" });
            } else {
                console.log("AddTask:タスクの追加に失敗");
            }
        } catch (err) {
            console.log("AddTask:接続に失敗");
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit((data, e) => sendTasks({ e, data }))}>
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
                                <Button
                                    type="button"
                                    color="default"
                                    variant="contained"
                                    onClick={() => remove(index)}
                                >
                                    Delete
                                </Button>
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
                        if (fields.length < 10) append({});
                        else
                            window.alert(
                                "リストが持てるタスクは１０個までです"
                            );
                    }}
                >
                    タスクの追加
                </Button>
            </SColumnContainer>
            <ImpSelect />
            <UrgSelect />
            <GroupSelect />
            <Button type="submit" color="default" variant="contained">
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
