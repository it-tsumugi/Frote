require("./bootstrap");

import { VFC } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import { StylesProvider } from "@material-ui/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./assets/styles/theme";

import { ComponentRouter } from "./router/ComponentRouter";

export const App: VFC = () => {
    return (
        <RecoilRoot>
            <StylesProvider injectFirst>
                <MuiThemeProvider theme={theme}>
                    <ComponentRouter />
                </MuiThemeProvider>
            </StylesProvider>
        </RecoilRoot>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
