import styled from "styled-components";
import { VFC } from "react";

import Grid from "@material-ui/core/Grid";
import { useRecoilValue } from "recoil";

import { SCard } from "../atoms/style/SCard";
import { DeleteGroupButton } from "../atoms/button/DeleteGroupButton";
import { NavButton } from "../atoms/button/NavButton";

import { useGetGroupLists } from "../../hooks/useGetGroupLists";
import { path } from "../../assets/data/path";
import { booleanState, groupListsState } from "../../state/atom";
import { SText } from "../atoms/style/TextStyle";
import { booleanStateKey } from "../../assets/data/stateKey";

export const GroupList: VFC = () => {
    useGetGroupLists();
    const groupLists = useRecoilValue(groupListsState);
    const isGroupTaskLists = useRecoilValue(
        booleanState(booleanStateKey.isGetGroupLists)
    );
    if (isGroupTaskLists) {
        if (groupLists.length !== 0) {
            return (
                <Grid container spacing={2}>
                    {groupLists.map((item) => {
                        return (
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={6}
                                lg={4}
                                key={item.id}
                            >
                                <SSCard>
                                    <SGroup>{item.group}</SGroup>
                                    <NavButton
                                        to={`/${item.id}` + path.editGroup}
                                    >
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
        } else {
            return <SText>グループが存在しません。追加してください</SText>;
        }
    } else {
        return <SText>ローディング中です</SText>;
    }
};

const SGroup = styled.div``;

const SSCard = styled(SCard)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
