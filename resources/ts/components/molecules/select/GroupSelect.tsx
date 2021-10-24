import { useEffect, useState, VFC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
    SColumnContainer,
    SFlexContainer,
    SItemName,
    SSelect,
} from "../../atoms/style/SelectStyle";
import { SText } from "../../atoms/style/TextStyle";

import { useGetGroupLists } from "../../../hooks/useGetGroupLists";
import { useGetGroup } from "../../../hooks/useGetGroup";
import { groupListsState, stringState } from "../../../state/atom";

type propsType = {
    task_list_id: number;
};

export const GroupSelect: VFC<propsType> = (props) => {
    const { task_list_id } = props;
    const [group, setGroup] = useRecoilState(stringState("group"));
    const groupLists = useRecoilValue(groupListsState);

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
                <SText>
                    グループがないためリストを作成出来ません。先にグループを作成してください
                </SText>
            ) : null}
        </SColumnContainer>
    );
};
