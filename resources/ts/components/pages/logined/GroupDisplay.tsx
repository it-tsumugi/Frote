import { VFC } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { TaskLists } from "../../organisms/TaskLists";
import { TaskListsButtonArea } from "../../molecules/task/TaskListsButtonArea";
import { SPaddingText, SText } from "../../atoms/style/TextStyle";

import { groupTaskListsState } from "../../../state/atom";
import { useGetGroupTaskLists } from "../../../hooks/useGetGroupTaskLists";

export const GroupDisplay: VFC = () => {
    const groupTaskLists = useRecoilValue(groupTaskListsState);
    useGetGroupTaskLists();

    return (
        <>
            {groupTaskLists.map((groupTaskLists) => {
                return (
                    <SGroupTaskLists key={groupTaskLists.group_id}>
                        <SText>{groupTaskLists.group}</SText>
                        {groupTaskLists.taskLists.length !== 0 ? (
                            <TaskLists
                                taskLists={groupTaskLists.taskLists}
                                taskType="group"
                            />
                        ) : (
                            <SPaddingText key={groupTaskLists.group_id}>
                                なし
                            </SPaddingText>
                        )}
                    </SGroupTaskLists>
                );
            })}
            <TaskListsButtonArea />
        </>
    );
};

const SGroupTaskLists = styled.div`
    margin-top: 20px;
`;
