import { VFC } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { TaskLists } from "../../organisms/TaskLists";
import { TaskListsButtonArea } from "../../molecules/task/TaskListsButtonArea";

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
                        <h3>{impTaskLists.text}</h3>
                        {impTaskLists.taskLists.length !== 0 ? (
                            <TaskLists taskLists={impTaskLists.taskLists} />
                        ) : (
                            <SText key={impTaskLists.id}>なし</SText>
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

const SText = styled.h3`
    padding: 30px;
`;
