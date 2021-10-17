import { useEffect, useState, VFC } from "react";

import {
    SColumnContainer,
    SFlexContainer,
    SItemName,
    SSelect,
} from "../../atoms/style/SelectStyle";

import { useGroupContext } from "../../../providers/GroupProvider";
import { useGetGroupLists } from "../../../hooks/useGetGroupLists";
import { useGroupListsContext } from "../../../providers/GroupListProvider";
import { useGetGroup } from "../../../hooks/useGetGroup";

type propsType = {
    task_list_id: number;
};

export const GroupSelect: VFC<propsType> = (props) => {
    const { task_list_id } = props;
    const { group, setGroup } = useGroupContext();
    const { groupLists } = useGroupListsContext();
    const [isLoading, setIsLoading] = useState(true);
    useGetGroupLists();
    useGetGroup(task_list_id, "task_list");
    useEffect(() => {
        setIsLoading(false);
    });
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
            {isLoading ? null : groupLists.length === 0 ? (
                <span>
                    グループがないためリストを作成出来ません。先にグループを作成してください
                </span>
            ) : null}
        </SColumnContainer>
    );
};
