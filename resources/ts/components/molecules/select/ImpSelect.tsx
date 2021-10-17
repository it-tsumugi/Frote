import { VFC } from "react";

import {
    SFlexContainer,
    SItemName,
    SSelect,
} from "../../atoms/style/SelectStyle";

import { useImpContext } from "../../../providers/ImpProvider";
import { useGetImp } from "../../../hooks/useGetImp";
import { impData } from "../../../assets/data/impData";

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
                {impData.map((item) => {
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
