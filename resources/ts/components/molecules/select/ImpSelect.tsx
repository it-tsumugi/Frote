import { VFC } from "react";

import {
    SFlexContainer,
    SItemName,
    SSelect,
} from "../../atoms/style/SelectStyle";

import { useImpContext } from "../../../providers/ImpProvider";
import { useGetImp } from "../../../hooks/useGetImp";

type propsType = {
    task_list_id: number;
};

export const ImpSelect: VFC<propsType> = (props) => {
    const { task_list_id } = props;
    const { imp, setImp } = useImpContext();
    useGetImp(task_list_id);
    return (
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
    );
};
