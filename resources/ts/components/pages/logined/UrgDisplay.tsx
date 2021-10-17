import { VFC } from "react";
import styled from "styled-components";

import { TaskLists } from "../../organisms/TaskLists";
import { TaskListsButtonArea } from "../../molecules/task/TaskListsButtonArea";

import { useUrgTaskListsContext } from "../../../providers/UrgTaskListsProvider";
import { useGetUrgTaskLists } from "../../../hooks/useGetUrgTaskLists";

export const UrgDisplay: VFC = () => {
    const { urgTaskLists } = useUrgTaskListsContext();
    useGetUrgTaskLists();

    return (
        <>
            {urgTaskLists.map((urgTaskLists) => {
                return (
                    <SUrgTaskLists key={urgTaskLists.id}>
                        <h3>{urgTaskLists.text}</h3>
                        {urgTaskLists.taskLists.length !== 0 ? (
                            <TaskLists taskLists={urgTaskLists.taskLists} />
                        ) : (
                            <SText key={urgTaskLists.id}>なし</SText>
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

const SText = styled.h3`
    padding: 30px;
`;
