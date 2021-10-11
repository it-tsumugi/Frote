import { VFC } from "react";
import styled from "styled-components";

import { Button, NativeSelect } from "@material-ui/core";
import { useImpContext } from "../../providers/ImpProvider";
import { useUrgContext } from "../../providers/UrgProvider";
import { useGroupContext } from "../../providers/GroupProvider";

export const SelectItems: VFC = () => {
    const { imp, setImp } = useImpContext();
    const { urg, setUrg } = useUrgContext();
    const { group, setGroup } = useGroupContext();

    return (
        <>
            <SFlexContainer>
                <SItemName>重要度</SItemName>
                <SSelect
                    inputProps={{
                        name: "importance",
                    }}
                    value={imp}
                    onChange={(e) => setImp(Number(e.target.value))}
                >
                    <option value={2}>自分の人生を大きく左右すること</option>
                    <option value={1}>自分のステップアップに必要なこと</option>
                    <option value={0}>第三者に出された課題</option>
                    <option value={-1}>日常生活に必要なこと</option>
                    <option value={-2}>重要でないがやりたいこと</option>
                </SSelect>
            </SFlexContainer>
            <SFlexContainer>
                <SItemName>緊急度</SItemName>
                <SSelect
                    inputProps={{
                        name: "urgency",
                    }}
                    value={urg}
                    onChange={(e) => setUrg(Number(e.target.value))}
                >
                    <option value={2}>
                        今すぐ終わらせなければならないこと
                    </option>
                    <option value={1}>期限が近く早く終わらせるべきこと</option>
                    <option value={0}>期限はあるがまだ近くないこと</option>
                    <option value={-1}>期限はないが早めにしたいこと</option>
                    <option value={-2}>全く急ぐ必要のないこと</option>
                </SSelect>
            </SFlexContainer>
            <SFlexContainer>
                <SItemName>グループ</SItemName>
                <SSelect
                    inputProps={{
                        name: "group",
                    }}
                    value={group}
                    onChange={(e) => setGroup(String(e.target.value))}
                >
                    <option value="その他">その他</option>
                    <option value="研究">研究</option>
                </SSelect>
            </SFlexContainer>
        </>
    );
};

const SFlexContainer = styled.div`
    display: flex;
`;

const SItemName = styled.div`
    width: 80px;
`;

const SSelect = styled(NativeSelect)`
    background-color: white;
`;
