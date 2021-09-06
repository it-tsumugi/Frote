import { VFC } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Top } from "../components/pages/Top";
import { Register } from "../components/pages/Register";
import { AuthRoute } from "./AuthRoute";
import { GuestRoute } from "./GuestRoute";
import { DefaultLayout } from "../components/templates/DefaultLayout";

export const ComponentRouter: VFC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <DefaultLayout>
                        <Top />
                    </DefaultLayout>
                </Route>
                <AuthRoute path="/home">
                    <DefaultLayout>
                        <Home />
                    </DefaultLayout>
                </AuthRoute>
                <GuestRoute path="/login">
                    <DefaultLayout>
                        <Login />
                    </DefaultLayout>
                </GuestRoute>
                <GuestRoute path="/register">
                    <DefaultLayout>
                        <Register />
                    </DefaultLayout>
                </GuestRoute>
                <Route exact path="*">
                    <Redirect to={{ pathname: "/" }} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
