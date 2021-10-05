import { useEffect, useState, VFC } from "react";
import styled from "styled-components";

import { Button, NativeSelect } from "@material-ui/core";

import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import { useHistory } from "react-router";

// type FormInputs = {
//     tasks: {
//         text: string;
//     }[];
//     importance: number;
//     emergency: number;
//     group: string;
// };

export const AddTask: VFC = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [imp, setImp] = useState(0);
    const [urg, setUrg] = useState(0);
    const [group, setGroup] = useState("");
    const history = useHistory();

    const { control, register, handleSubmit } = useForm({
        defaultValues: {
            tasks: [{ text: "" }],
        },
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "tasks",
    });

    type sendPropsType = {
        e: React.ChangeEvent<HTMLFormElement>;
        tasks: string[];
    };

    const sendTasks = async (data: sendPropsType) => {
        const e = data.e;
        e.preventDefault();

        setTasks(data.tasks);

        try {
            const res = await axios.post("/api/addtasks", {
                tasks,
                imp,
                urg,
                group,
            });
            if (res.data.resuld) {
                console.log("AddTask:タスクの追加に成功");
                history.push({ pathname: "/home" });
            } else {
                console.log("AddTask:タスクの追加に失敗");
                console.log(res.data.message);
            }
        } catch (err) {
            console.log("AddTask:接続に失敗");
            console.log(err);
        }
    };
    return (
        <form onSubmit={(e) => handleSubmit(sendTasks)}>
            <SColumnContainer>
                <h3>タスクの内容</h3>
                {fields.map((field, index) => (
                    <div key={field.id}>
                        <SFlexContainer>
                            <SColumnContainer>
                                <span>{"タスク" + (index + 1)}</span>
                                <textarea
                                    rows={5}
                                    cols={60}
                                    placeholder="タスク内容を入力してください"
                                    {...register(`tasks.${index}.text`)}
                                ></textarea>
                            </SColumnContainer>
                            {index !== 0 ? (
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
                    onClick={() => append({})}
                >
                    タスクの追加
                </Button>
            </SColumnContainer>

            <SFlexContainer>
                <h3 style={{ paddingRight: "30px" }}>重要度</h3>
                <NativeSelect
                    defaultValue={0}
                    inputProps={{
                        name: "importance",
                    }}
                    value={imp}
                    style={{ backgroundColor: "white" }}
                    onChange={(e) => setImp(Number(e.target.value))}
                >
                    <option value={-4}>-4</option>
                    <option value={-3}>-3</option>
                    <option value={-2}>-3</option>
                    <option value={-1}>-1</option>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </NativeSelect>
            </SFlexContainer>
            <SFlexContainer>
                <h3 style={{ paddingRight: "30px" }}>緊急度</h3>
                <NativeSelect
                    defaultValue={0}
                    inputProps={{
                        name: "urgency",
                    }}
                    style={{
                        backgroundColor: "white",
                    }}
                    value={urg}
                    onChange={(e) => setUrg(Number(e.target.value))}
                >
                    <option value={-4}>-4</option>
                    <option value={-3}>-3</option>
                    <option value={-2}>-3</option>
                    <option value={-1}>-1</option>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </NativeSelect>
            </SFlexContainer>
            <SFlexContainer>
                <h3 style={{ paddingRight: "30px" }}>所属するグループ</h3>
                <NativeSelect
                    defaultValue="その他"
                    inputProps={{
                        name: "group",
                    }}
                    style={{
                        backgroundColor: "white",
                    }}
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                >
                    <option value="その他">その他</option>
                    <option value="研究">研究</option>
                </NativeSelect>
            </SFlexContainer>
            <input type="hidden" name="num" value={fields.length}></input>
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
