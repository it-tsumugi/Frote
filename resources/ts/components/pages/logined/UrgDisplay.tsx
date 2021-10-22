import { VFC } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { TaskLists } from "../../organisms/TaskLists";
import { TaskListsButtonArea } from "../../molecules/task/TaskListsButtonArea";

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
                        <h3>{urgTaskLists.text}</h3>
                        {urgTaskLists.taskLists.length !== 0 ? (
                            <TaskLists
                                taskLists={urgTaskLists.taskLists}
                                taskType="urg"
                            />
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
