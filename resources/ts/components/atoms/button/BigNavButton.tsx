import { Link } from "react-router-dom";
import styled from "styled-components";

export const BigNavButton = styled(Link)`
    width: 100vw;
    height: 20vw;
    padding: 15px;
    color: #f0f0f0;
    height: 100%;
    box-sizing: border-box;
    font-size: 24px;
    &:hover {
        color: gray;
    }
`;
