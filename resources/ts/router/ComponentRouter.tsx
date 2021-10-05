import { VFC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/logined/Home";
import { Top } from "../components/pages/Top";
import { Register } from "../components/pages/Register";
import { AuthRoute } from "./AuthRoute";
import { GuestRoute } from "./GuestRoute";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { LoginedLayout } from "../components/templates/LoginedLayout";
import { AddGroup } from "../components/pages/logined/action/AddGroup";
import { Quadrant } from "../components/pages/logined/Quadrant";
import { Group } from "../components/pages/logined/Group";
import { Edit } from "../components/pages/logined/action/Edit";
import { Help } from "../components/pages/Help";
import { path } from "../assets/data/path";
import { AddTask } from "../components/pages/logined/action/AddTask";
import { ActionLayout } from "../components/templates/ActionLayout";

export const ComponentRouter: VFC = () => {
    return (
        <SComponentContainer>
            <BrowserRouter>
                <Switch>
                    <Route exact path={path.top}>
                        <DefaultLayout>
                            <Top />
                        </DefaultLayout>
                    </Route>
                    <Route path={path.help}>
                        <DefaultLayout>
                            <Help />
                        </DefaultLayout>
                    </Route>
                    <GuestRoute path={path.login}>
                        <DefaultLayout>
                            <Login />
                        </DefaultLayout>
                    </GuestRoute>
                    <GuestRoute path={path.register}>
                        <DefaultLayout>
                            <Register />
                        </DefaultLayout>
                    </GuestRoute>

                    <AuthRoute path={path.home}>
                        <LoginedLayout>
                            <Home />
                        </LoginedLayout>
                    </AuthRoute>
                    <AuthRoute path={path.quadrant}>
                        <LoginedLayout>
                            <Quadrant />
                        </LoginedLayout>
                    </AuthRoute>
                    <AuthRoute path={path.group}>
                        <LoginedLayout>
                            <Group />
                        </LoginedLayout>
                    </AuthRoute>

                    <AuthRoute path={path.edit}>
                        <ActionLayout>
                            <Edit />
                        </ActionLayout>
                    </AuthRoute>
                    <AuthRoute path={path.addgroup}>
                        <ActionLayout>
                            <AddGroup />
                        </ActionLayout>
                    </AuthRoute>
                    <AuthRoute path={path.addtask}>
                        <ActionLayout>
                            <AddTask />
                        </ActionLayout>
                    </AuthRoute>

                    <Route path="*">
                        <Redirect to={{ pathname: path.top }} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    //色の指定
    color: white;
    background-color: #423c3c;
`;
