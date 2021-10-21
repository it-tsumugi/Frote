import { VFC } from "react";
import { useRecoilState } from "recoil";

import {
    SFlexContainer,
    SItemName,
    SSelect,
} from "../../atoms/style/SelectStyle";

import { useGetUrg } from "../../../hooks/useGetUrg";
import { urgData } from "../../../assets/data/urgData";
import { numberState } from "../../../state/atom";

type propsType = {
    task_list_id: number;
};

export const UrgSelect: VFC<propsType> = (props) => {
    const { task_list_id } = props;
    const [urg, setUrg] = useRecoilState(numberState("urg"));
    useGetUrg(task_list_id);

    return (
        <SFlexContainer>
            <SItemName>緊急度</SItemName>
            <SSelect
                inputProps={{
                    name: "urgency",
                }}
                value={urg}
                onChange={(e) => setUrg(Number(e.target.value))}
            >
                {urgData.map((item) => {
                    return (
                        <option value={item.num} key={item.num}>
                            {item.text}
                        </option>
                    );
                })}
            </SSelect>
        </SFlexContainer>
    );
};
