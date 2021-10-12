import { VFC } from "react";

import {
    SFlexContainer,
    SItemName,
    SSelect,
} from "../../atoms/style/SelectStyle";

import { useUrgContext } from "../../../providers/UrgProvider";

export const UrgSelect: VFC = () => {
    const { urg, setUrg } = useUrgContext();

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
                <option value={2}>今すぐ終わらせなければならないこと</option>
                <option value={1}>期限が近く早く終わらせるべきこと</option>
                <option value={0}>期限はあるがまだ近くないこと</option>
                <option value={-1}>期限はないが早めにしたいこと</option>
                <option value={-2}>全く急ぐ必要のないこと</option>
            </SSelect>
        </SFlexContainer>
    );
};
