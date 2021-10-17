import { VFC } from "react";
import axios from "axios";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useHistory } from "react-router";

import { ImpSelect } from "../../../molecules/select/ImpSelect";
import { UrgSelect } from "../../../molecules/select/UrgSelect";
import { GroupSelect } from "../../../molecules/select/GroupSelect";
import { NavButton } from "../../../atoms/button/NavButton";
import { AddTaskArea } from "../../../organisms/AddTaskArea";
import { ActionButton } from "../../../atoms/button/ActionButton";

import { useImpContext } from "../../../../providers/ImpProvider";
import { useUrgContext } from "../../../../providers/UrgProvider";
import { useGroupContext } from "../../../../providers/GroupProvider";
import { path } from "../../../../assets/data/path";
import { SubmitButton } from "../../../atoms/button/SubmitButton";

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
    const { fields, append, remove, insert } = useFieldArray({
        control,
        name: "tasks",
    });

    const addTaskList: SubmitHandler<dataType> = async ({ e, data }) => {
        const tasks = data.tasks;
        e.preventDefault();

        try {
            const res = await axios.post("/api/add/tasklist", {
                tasks,
                imp,
                urg,
                group,
            });
            if (res.data.result) {
                console.log("addTaskList:タスクの追加に成功");
                window.alert("タスクを追加しました");
                history.push({ pathname: "/home" });
            } else {
                console.log("addTaskList:タスクの追加に失敗");
            }
        } catch (err) {
            console.log("addTaskList:接続に失敗");
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit((data, e) => addTaskList({ e, data }))}>
            <AddTaskArea
                fields={fields}
                append={append}
                remove={remove}
                insert={insert}
                register={register}
            />
            <ImpSelect task_list_id={-1} />
            <UrgSelect task_list_id={-1} />
            <GroupSelect task_list_id={-1} />
            <SubmitButton>送信</SubmitButton>
            <NavButton to={path.addGroup}>グループの追加</NavButton>
        </form>
    );
};
