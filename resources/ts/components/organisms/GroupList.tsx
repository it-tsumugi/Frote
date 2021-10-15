import styled from "styled-components";
import { VFC } from "react";

import Grid from "@material-ui/core/Grid";

import { SCard } from "../atoms/style/SCard";
import { DeleteGroupButton } from "../atoms/button/DeleteGroupButton";
import { NavButton } from "../atoms/button/NavButton";

import { useGroupListsContext } from "../../providers/GroupListProvider";
import { useGetGroupLists } from "../../hooks/useGetGroupLists";
import { path } from "../../assets/data/path";

export const GroupList: VFC = () => {
    const { groupLists } = useGroupListsContext();
    useGetGroupLists();

    return (
        <Grid container spacing={2}>
            {groupLists.map((item, index) => {
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
