require("./bootstrap");

import { VFC } from "react";
import ReactDOM from "react-dom";

import { StylesProvider } from "@material-ui/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./assets/styles/theme";

import { ComponentRouter } from "./router/ComponentRouter";
import { UserInfoProvider } from "./providers/UserInfoProvder";
import { AuthProvider } from "./providers/AuthProvider";
import styled from "styled-components";

export const App: VFC = () => {
    return (
        <AuthProvider>
            <UserInfoProvider>
                <StylesProvider injectFirst>
                    <MuiThemeProvider theme={theme}>
                        {/* <SComponentContainer> */}
                        <ComponentRouter />
                        {/* </SComponentContainer> */}
                    </MuiThemeProvider>
                </StylesProvider>
            </UserInfoProvider>
        </AuthProvider>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}

const SComponentContainer = styled.div`
    background-color: blue;
    .MuiInputLabel-root {
        color: blue;
    }
`;
