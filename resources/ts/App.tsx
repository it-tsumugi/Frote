require("./bootstrap");

import { VFC } from "react";
import ReactDOM from "react-dom";

import { StylesProvider } from "@material-ui/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./assets/styles/theme";

import { ComponentRouter } from "./router/ComponentRouter";
import { AuthProvider } from "./providers/AuthProvider";
import { TaskListsProvider } from "./providers/TaskListsProvider";
import { UrgProvider } from "./providers/UrgProvider";
import { GroupProvider } from "./providers/GroupProvider";
import { ImpProvider } from "./providers/ImpProvider";

export const App: VFC = () => {
    return (
        <UrgProvider>
            <GroupProvider>
                <ImpProvider>
                    <TaskListsProvider>
                        <AuthProvider>
                            <StylesProvider injectFirst>
                                <MuiThemeProvider theme={theme}>
                                    <ComponentRouter />
                                </MuiThemeProvider>
                            </StylesProvider>
                        </AuthProvider>
                    </TaskListsProvider>
                </ImpProvider>
            </GroupProvider>
        </UrgProvider>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
