import { VFC } from "react";
import styled from "styled-components";
import { SCenter } from "../atoms/style/SCenter";
import { SFooterFixed } from "../atoms/style/SFooterFixed";
import { Footer } from "../organisms/layout/Footer";
import { Header } from "../organisms/layout/Header";
import { Nav } from "../organisms/layout/Nav";

type PropsType = {
    children: React.ReactElement;
};

export const ActionLayout: VFC<PropsType> = (props) => {
    const { children } = props;
    return (
        <SFooterFixed>
            <Header />
            <Nav />
            <SCenter>{children}</SCenter>
            <Footer />
        </SFooterFixed>
    );
};
