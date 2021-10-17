import { VFC } from "react";
import {
    FieldArrayWithId,
    FieldArrayMethodProps,
    UseFormRegister,
} from "react-hook-form";
import styled from "styled-components";

import { ActionButton } from "../atoms/button/ActionButton";
import { DummyButton } from "../atoms/button/DummyButton";
import { SColumnContainer, SFlexContainer } from "../atoms/style/SelectStyle";

type FormData = {
    tasks: {
        task: string;
    }[];
};

type propsType = {
    fields: FieldArrayWithId<FormData, "tasks", "id">[];
    append: (
        value:
            | Partial<{
                  task: string;
              }>
            | Partial<{
                  task: string;
              }>[],
        options?: FieldArrayMethodProps | undefined
    ) => void;
    remove: (index?: number | number[] | undefined) => void;
    insert: (
        index: number,
        value:
            | Partial<{
                  task: string;
              }>
            | Partial<{
                  task: string;
              }>[],
        options?: FieldArrayMethodProps | undefined
    ) => void;
    register: UseFormRegister<FormData>;
};

export const AddTaskArea: VFC<propsType> = (props) => {
    const { fields, append, remove, insert, register } = props;

    return (
        <SColumnContainer>
            <h3>タスクの内容</h3>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <SFlexContainer>
                        <SColumnContainer>
                            <span>{"タスク" + (index + 1)}</span>
                            <SFlexContainer>
                                <textarea
                                    rows={2}
                                    cols={30}
                                    {...register(
                                        `tasks.${index}.task` as const
                                    )}
                                    placeholder="タスク内容を入力してください"
                                ></textarea>

                                {index > 0 ? (
                                    <>
                                        <ActionButton
                                            onClick={() => remove(index)}
                                        >
                                            削除
                                        </ActionButton>
                                    </>
                                ) : (
                                    <DummyButton>削除</DummyButton>
                                )}
                                {index < 19 ? (
                                    <ActionButton
                                        onClick={() => insert(index + 1, {})}
                                    >
                                        挿入
                                    </ActionButton>
                                ) : (
                                    <DummyButton>挿入</DummyButton>
                                )}
                            </SFlexContainer>
                        </SColumnContainer>
                    </SFlexContainer>
                </div>
            ))}
            <SActionButton
                style={{ width: "100px" }}
                onClick={() => {
                    if (fields.length < 20) append({});
                    else window.alert("リストが持てるタスクは２０個までです");
                }}
            >
                タスクの追加
            </SActionButton>
        </SColumnContainer>
    );
};

const SActionButton = styled(ActionButton)`
    max-width: 100px;
`;
