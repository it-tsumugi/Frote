import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavButton = styled(Link)`
    margin: 5px;
    display: inline-block;
    border-radius: 5%;
    font-size: 18pt;
    cursor: pointer;
    padding: 12px 12px;
    background: #2d2d31;
    color: #ffffff;
    line-height: 1em;
    opacity: 1;
    transition: 0.3s;
    box-shadow: 4px 4px 3px gray;
    font-size: 14px;
    &:hover {
        box-shadow: none;
        text-decoration: none;
        color: white;
        opacity: 0.6;
    }
`;
