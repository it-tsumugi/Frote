import styled from "styled-components";
import { VFC } from "react";

import Grid from "@material-ui/core/Grid";
import { useRecoilValue } from "recoil";

import { SCard } from "../atoms/style/SCard";
import { DeleteGroupButton } from "../atoms/button/DeleteGroupButton";
import { NavButton } from "../atoms/button/NavButton";

import { useGetGroupLists } from "../../hooks/useGetGroupLists";
import { path } from "../../assets/data/path";
import { groupListsState } from "../../state/atom";

export const GroupList: VFC = () => {
    useGetGroupLists();
    const groupLists = useRecoilValue(groupListsState);

    return (
        <Grid container spacing={2}>
            {groupLists.map((item) => {
                return (
                    <Grid item xs={12} sm={12} md={6} lg={4} key={item.id}>
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
