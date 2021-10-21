import { VFC } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { TaskLists } from "../../organisms/TaskLists";
import { TaskListsButtonArea } from "../../molecules/task/TaskListsButtonArea";

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
                        <h3>{groupTaskLists.group}</h3>
                        {groupTaskLists.taskLists.length !== 0 ? (
                            <TaskLists taskLists={groupTaskLists.taskLists} />
                        ) : (
                            <SText key={groupTaskLists.group_id}>なし</SText>
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

const SText = styled.h3`
    padding: 30px;
`;
