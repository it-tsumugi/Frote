import { VFC } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";

import { TaskLists } from "../../organisms/TaskLists";
import { TaskListsButtonArea } from "../../molecules/task/TaskListsButtonArea";
import { SPaddingText, SText } from "../../atoms/style/TextStyle";

import { useGetImpTaskLists } from "../../../hooks/useGetImpTaskLists";
import { impTaskListsState } from "../../../state/atom";
import { CircularProgress } from "@material-ui/core";

export const ImpDisplay: VFC = () => {
    const impTaskLists = useRecoilValueLoadable(impTaskListsState);
    useGetImpTaskLists();

    switch (impTaskLists.state) {
        case "hasValue":
            return (
                <>
                    {impTaskLists.contents.map((impTaskLists) => {
                        return (
                            <SImpTaskLists key={impTaskLists.id}>
                                <SText>{impTaskLists.text}</SText>
                                {impTaskLists.taskLists.length !== 0 ? (
                                    <TaskLists
                                        taskLists={impTaskLists.taskLists}
                                        taskType="imp"
                                    />
                                ) : (
                                    <SPaddingText key={impTaskLists.id}>
                                        タスクは存在しません
                                    </SPaddingText>
                                )}
                            </SImpTaskLists>
                        );
                    })}
                    <TaskListsButtonArea />
                </>
            );
        case "loading":
            return <CircularProgress style={{ color: "#fff" }} />;
        case "hasError":
            throw impTaskLists.contents;
    }
};

const SImpTaskLists = styled.div`
    margin-top: 20px;
`;
