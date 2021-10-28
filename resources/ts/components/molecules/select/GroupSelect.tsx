import { VFC } from "react";
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
import {
    booleanState,
    groupListsState,
    stringState,
} from "../../../state/atom";
import { booleanStateKey, stringStateKey } from "../../../assets/data/stateKey";

type propsType = {
    task_list_id: number;
};

export const GroupSelect: VFC<propsType> = (props) => {
    const { task_list_id } = props;
    const isComplete = useRecoilValue(
        booleanState(booleanStateKey.isGetGroupLists)
    );
    const [group, setGroup] = useRecoilState(stringState(stringStateKey.group));
    const groupLists = useRecoilValue(groupListsState);

    useGetGroup(task_list_id, "task_list");
    useGetGroupLists();
    if (isComplete) {
        if (groupLists.length === 0) {
            return (
                <SText>
                    グループがないためリストを作成出来ません。先にグループを作成してください
                </SText>
            );
        } else {
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
                            {groupLists.map((item) => {
                                return (
                                    <option value={item.group} key={item.id}>
                                        {item.group}
                                    </option>
                                );
                            })}
                        </SSelect>
                    </SFlexContainer>
                </SColumnContainer>
            );
        }
    } else {
        return <h1>ローディング中</h1>;
    }
};
