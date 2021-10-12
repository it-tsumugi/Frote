import { useEffect, VFC } from "react";

import {
    SFlexContainer,
    SItemName,
    SSelect,
} from "../../atoms/style/SelectStyle";

import { useGroupContext } from "../../../providers/GroupProvider";
import { useGetGroupList } from "../../../hooks/useGetGroupList";
import { useGroupListContext } from "../../../providers/GroupListProvider";

export const GroupSelect: VFC = (props) => {
    const { group, setGroup } = useGroupContext();
    const { groupList } = useGroupListContext();
    useGetGroupList();
    return (
        <SFlexContainer>
            <SItemName>グループ</SItemName>
            <SSelect
                inputProps={{
                    name: "group",
                }}
                value={group}
                onChange={(e) => setGroup(String(e.target.value))}
            >
                {groupList.map((item, index) => {
                    return (
                        <option value={item.group} key={item.id}>
                            {item.group}
                        </option>
                    );
                })}
            </SSelect>
        </SFlexContainer>
    );
};
