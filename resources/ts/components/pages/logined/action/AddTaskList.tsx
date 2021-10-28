import { useState, VFC } from "react";
import axios from "axios";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { ImpSelect } from "../../../molecules/select/ImpSelect";
import { UrgSelect } from "../../../molecules/select/UrgSelect";
import { GroupSelect } from "../../../molecules/select/GroupSelect";
import { NavButton } from "../../../atoms/button/NavButton";
import { AddTaskArea } from "../../../organisms/AddTaskArea";
import { ActionButton } from "../../../atoms/button/ActionButton";
import { FormCard } from "../../../atoms/form/FormCard";
import { SActionText } from "../../../atoms/style/TextStyle";

import { path } from "../../../../assets/data/path";
import { numberState, stringState } from "../../../../state/atom";
import {
    numberStateKey,
    stringStateKey,
} from "../../../../assets/data/stateKey";

type FormData = {
    tasks: {
        task: string;
    }[];
};

type dataType = {
    e: React.BaseSyntheticEvent<object, any, any> | undefined;
    data: FormData;
};

export const AddTaskList: VFC = () => {
    const imp = useRecoilValue(numberState(numberStateKey.imp));
    const urg = useRecoilValue(numberState(numberStateKey.urg));
    const group = useRecoilValue(stringState(stringStateKey.group));

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

    const [isComplete, setIsComplete] = useState(false);

    const onClick = () => {
        setIsComplete(true);
    };

    const addTaskList: SubmitHandler<dataType> = async ({ e, data }) => {
        const tasks = data.tasks;
        e?.preventDefault();
        if (isComplete) {
            if (group !== "") {
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
                        window.alert(
                            "すべてのタスクは１文字以上３０文字以下である必要があります"
                        );
                        console.log("addTaskList:タスクの追加に失敗");
                    }
                } catch (err) {
                    console.log("addTaskList:エラー");
                    console.log(err);
                }
            } else {
                window.alert("グループを追加してください");
            }
        }
    };

    return (
        <>
            <SActionText>リストの内容を入力してください</SActionText>
            <FormCard>
                <SForm
                    onSubmit={handleSubmit((data, e) =>
                        addTaskList({ e, data })
                    )}
                >
                    <AddTaskArea
                        fields={fields}
                        append={append}
                        remove={remove}
                        insert={insert}
                        register={register}
                    />
                    <div>
                        <ImpSelect task_list_id={-1} />
                        <UrgSelect task_list_id={-1} />
                        <GroupSelect task_list_id={-1} />
                    </div>
                    <ActionButton type="submit" onClick={onClick}>
                        決定
                    </ActionButton>
                </SForm>
            </FormCard>
            <NavButton to={path.addGroup}>グループの追加へ</NavButton>
        </>
    );
};

const SForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
