import { useEffect, VFC } from "react";

import {
    SColumnContainer,
    SFlexContainer,
    SItemName,
    SSelect,
} from "../../atoms/style/SelectStyle";

import { useGroupContext } from "../../../providers/GroupProvider";
import { useGetGroupLists } from "../../../hooks/useGetGroupLists";
import { useGroupListsContext } from "../../../providers/GroupListProvider";
import { useHistory } from "react-router";
import { path } from "../../../assets/data/path";

export const GroupSelect: VFC = (props) => {
    const { group, setGroup } = useGroupContext();
    const { groupLists } = useGroupListsContext();
    const history = useHistory();
    useGetGroupLists();
    return (
        <SColumnContainer>
            <SFlexContainer>
                <SItemName>グループ</SItemName>
                <SSelect
                    inputProps={{
                        name: "group",
                    }}
                    value={group}
                    onChange={(e) => setGroup(String(e.target.value))}
                >
                    {groupLists.map((item, index) => {
                        return (
                            <option value={item.group} key={item.id}>
                                {item.group}
                            </option>
                        );
                    })}
                </SSelect>
            </SFlexContainer>
            {groupLists.length === 0 ? (
                <span>
                    グループがないためリストを作成出来ません。先にグループを作成してください
                </span>
            ) : null}
        </SColumnContainer>
    );
};
