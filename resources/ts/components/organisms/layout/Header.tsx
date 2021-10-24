import { VFC } from "react";
import styled from "styled-components";

import { HeaderMenu } from "../../molecules/header/HeaderMenu";
import { AppBar } from "@material-ui/core";
import { HeaderLinks } from "../../molecules/header/HeaderLnks";
import media from "../../../assets/styles/media";

export const Header: VFC = () => {
    return (
        <SAppBar position="static" color="inherit">
            <HeaderLinks />
            <HeaderMenu />
        </SAppBar>
    );
};

const SAppBar = styled(AppBar)`
    background: #201a22;
    color: #fff;
    padding: 8px 0;

    height: 5vh;
    ${media.lg`
    height: 8vh;
    `}
    ${media.md`
    height: 10vh;
    `}
`;
