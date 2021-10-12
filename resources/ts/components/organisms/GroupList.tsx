import { VFC } from "react";

import Grid from "@material-ui/core/Grid";

import { TaskList } from "./TaskList";
import { SCard } from "../atoms/style/SCard";
import { useTaskListsContext } from "../../providers/TaskListsProvider";
import { useGetTaskLists } from "../../hooks/useGetTaskLists";
import { useGroupListContext } from "../../providers/GroupListProvider";
import { useGetGroupList } from "../../hooks/useGetGroupList";
import styled from "styled-components";
import { path } from "../../assets/data/path";
import { NavButton } from "../atoms/button/NavButton";
import { DeleteGroupButton } from "../atoms/button/DeleteGroupButton";
import { SFlexContainer } from "../atoms/style/SelectStyle";

export const GroupList: VFC = () => {
    const { groupList } = useGroupListContext();
    useGetGroupList();

    return (
        <Grid container spacing={2}>
            {groupList.map((item, index) => {
                return (
                    <Grid item xs={6} sm={6} md={6} lg={4} key={item.id}>
                        <SSCard>
                            <SGroup>{item.group}</SGroup>
                            <NavButton to={`/${item.id}` + path.editGroup}>
                                編集
                            </NavButton>
                            <DeleteGroupButton id={item.id}>
                                削除
                            </DeleteGroupButton>
                        </SSCard>
                    </Grid>
                );
            })}
        </Grid>
    );
};

const SGroup = styled.div``;

const SSCard = styled(SCard)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
