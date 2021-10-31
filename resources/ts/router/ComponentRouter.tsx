import { VFC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/logined/Home";
import { Top } from "../components/pages/Top";
import { Register } from "../components/pages/Register";
import { AuthRoute } from "./AuthRoute";
import { GuestRoute } from "./GuestRoute";
import { NavLessLayout } from "../components/templates/NavLessLayout";
import { NavLayout } from "../components/templates/NavLayout";
import { AddGroup } from "../components/pages/logined/action/AddGroup";
import { GroupDisplay } from "../components/pages/logined/GroupDisplay";
import { EditTask } from "../components/pages/logined/action/EditTask";
import { Usage } from "../components/pages/Usage";
import { AddTaskList } from "../components/pages/logined/action/AddTaskList";
import { InsertTask } from "../components/pages/logined/action/InsertTask";
import { Group } from "../components/pages/logined/Group";
import { EditGroup } from "../components/pages/logined/action/EditGroup";
import { ImpDisplay } from "../components/pages/logined/ImpDisplay";
import { UrgDisplay } from "../components/pages/logined/UrgDisplay";
import { AddTasks } from "../components/pages/logined/action/AddTasks";
import { EditSelectParams } from "../components/pages/logined/action/EditSelectParams";
import { ConfirmRegister } from "../components/pages/confirmRegister";
import { Help } from "../components/pages/Help";

import { path } from "../assets/data/path";

export const ComponentRouter: VFC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={path.top}>
                    <NavLessLayout>
                        <Top />
                    </NavLessLayout>
                </Route>
                <Route path={path.usage}>
                    <NavLessLayout>
                        <Usage />
                    </NavLessLayout>
                </Route>
                <Route path={path.help}>
                    <NavLessLayout>
                        <Help />
                    </NavLessLayout>
                </Route>

                <GuestRoute path={path.login}>
                    <NavLessLayout>
                        <Login />
                    </NavLessLayout>
                </GuestRoute>
                <GuestRoute path={path.register}>
                    <NavLessLayout>
                        <Register />
                    </NavLessLayout>
                </GuestRoute>
                <GuestRoute path={path.confirmRegister}>
                    <NavLessLayout>
                        <ConfirmRegister />
                    </NavLessLayout>
                </GuestRoute>
                <GuestRoute path={path.confirmRegister}>
                    <NavLessLayout>
                        <ConfirmRegister />
                    </NavLessLayout>
                </GuestRoute>

                <AuthRoute path={path.home}>
                    <NavLayout>
                        <Home />
                    </NavLayout>
                </AuthRoute>
                <AuthRoute path={path.groupDisplay}>
                    <NavLayout>
                        <GroupDisplay />
                    </NavLayout>
                </AuthRoute>
                <AuthRoute path={path.impDisplay}>
                    <NavLayout>
                        <ImpDisplay />
                    </NavLayout>
                </AuthRoute>
                <AuthRoute path={path.urgDisplay}>
                    <NavLayout>
                        <UrgDisplay />
                    </NavLayout>
                </AuthRoute>
                <AuthRoute path={path.group}>
                    <NavLayout>
                        <Group />
                    </NavLayout>
                </AuthRoute>

                <AuthRoute path={path.addGroup}>
                    <NavLayout>
                        <AddGroup />
                    </NavLayout>
                </AuthRoute>
                <AuthRoute path={"/:id" + path.addTasks}>
                    <NavLayout>
                        <AddTasks />
                    </NavLayout>
                </AuthRoute>
                <AuthRoute path={path.addTaskList}>
                    <NavLayout>
                        <AddTaskList />
                    </NavLayout>
                </AuthRoute>
                <AuthRoute path={"/:id" + path.editTask}>
                    <NavLayout>
                        <EditTask />
                    </NavLayout>
                </AuthRoute>
                <AuthRoute path={"/:id" + path.editTaskList}>
                    <NavLayout>
                        <EditSelectParams />
                    </NavLayout>
                </AuthRoute>
                <AuthRoute path={"/:id" + path.editGroup}>
                    <NavLayout>
                        <EditGroup />
                    </NavLayout>
                </AuthRoute>
                <AuthRoute path={"/:id" + path.insertTask}>
                    <NavLayout>
                        <InsertTask />
                    </NavLayout>
                </AuthRoute>

                <Route path="*">
                    <Redirect to={{ pathname: path.top }} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
