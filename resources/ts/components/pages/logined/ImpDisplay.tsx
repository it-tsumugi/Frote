import { VFC } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { TaskLists } from "../../organisms/TaskLists";
import { TaskListsButtonArea } from "../../molecules/task/TaskListsButtonArea";
import { SPaddingText, SText } from "../../atoms/style/TextStyle";

import { useGetImpTaskLists } from "../../../hooks/useGetImpTaskLists";
import { impTaskListsState } from "../../../state/atom";

export const ImpDisplay: VFC = () => {
    const impTaskLists = useRecoilValue(impTaskListsState);
    useGetImpTaskLists();

    return (
        <>
            {impTaskLists.map((impTaskLists) => {
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
                                なし
                            </SPaddingText>
                        )}
                    </SImpTaskLists>
                );
            })}
            <TaskListsButtonArea />
        </>
    );
};

const SImpTaskLists = styled.div`
    margin-top: 20px;
`;
