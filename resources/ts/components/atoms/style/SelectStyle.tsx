import { NativeSelect } from "@material-ui/core";
import styled from "styled-components";

export const SFlexContainer = styled.div`
    display: flex;
`;

export const SColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SItemName = styled.div`
    width: 80px;
`;

export const SSelect = styled(NativeSelect)`
    background-color: white;
`;
