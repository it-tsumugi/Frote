import { VFC } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { TaskLists } from "../../organisms/TaskLists";
import { TaskListsButtonArea } from "../../molecules/task/TaskListsButtonArea";
import { SPaddingText, SText } from "../../atoms/style/TextStyle";

import { useGetUrgTaskLists } from "../../../hooks/useGetUrgTaskLists";
import { urgTaskListsState } from "../../../state/atom";

export const UrgDisplay: VFC = () => {
    const urgTaskLists = useRecoilValue(urgTaskListsState);
    useGetUrgTaskLists();

    return (
        <>
            {urgTaskLists.map((urgTaskLists) => {
                return (
                    <SUrgTaskLists key={urgTaskLists.id}>
                        <SText>{urgTaskLists.text}</SText>
                        {urgTaskLists.taskLists.length !== 0 ? (
                            <TaskLists
                                taskLists={urgTaskLists.taskLists}
                                taskType="urg"
                            />
                        ) : (
                            <SPaddingText key={urgTaskLists.id}>
                                なし
                            </SPaddingText>
                        )}
                    </SUrgTaskLists>
                );
            })}
            <TaskListsButtonArea />
        </>
    );
};

const SUrgTaskLists = styled.div`
    margin-top: 20px;
`;
