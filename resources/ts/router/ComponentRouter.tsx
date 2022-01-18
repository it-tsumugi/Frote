import { VFC } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Login } from '../components/pages/Login/Container'
import { Top } from '../components/pages/Top/Container'
import { Register } from '../components/pages/Register/Container'
import { AuthRoute } from './AuthRoute'
import { GuestRoute } from './GuestRoute'
import { NavLessLayout } from '../components/templates/NavLessLayout'
import { NavLayout } from '../components/templates/NavLayout'
import { AddGroup } from '../components/pages/AddGroup/Container'
import { GroupDisplay } from '../components/pages/GroupDisplay/Container'
import { EditTask } from '../components/pages/EditTask/Container'
import { Usage } from '../components/pages/Usage/Container'
import { AddTaskList } from '../components/pages/AddTaskList/Container'
import { InsertTask } from '../components/pages/InsertTask/Container'
import { Group } from '../components/pages/Group/Container'
import { EditGroup } from '../components/pages/EditGroup/Container'
import { UrgDisplay } from '../components/pages/UrgDisplay/Container'
import { ImpDisplay } from '../components/pages/ImpDisplay/Container'
import { AddTasks } from '../components/pages/AddTasks/Container'
import { EditSelectParams } from '../components/pages/EditSelectParams/Container'
import { ConfirmRegister } from '../components/pages/ConfirmRegister/Container'
import { Help } from '../components/pages/Help/Container'
import { path } from '../constant/path'
import { Home } from '../components/pages/Home/Container'
import { Loading } from '../components/pages/Loading/Container'

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
        <AuthRoute path={'/:id' + path.addTasks}>
          <NavLayout>
            <AddTasks />
          </NavLayout>
        </AuthRoute>
        <AuthRoute path={path.addTaskList}>
          <NavLayout>
            <AddTaskList />
          </NavLayout>
        </AuthRoute>
        <AuthRoute path={'/:id' + path.editTask}>
          <NavLayout>
            <EditTask />
          </NavLayout>
        </AuthRoute>
        <AuthRoute path={'/:id' + path.editTaskList}>
          <NavLayout>
            <EditSelectParams />
          </NavLayout>
        </AuthRoute>
        <AuthRoute path={'/:id' + path.editGroup}>
          <NavLayout>
            <EditGroup />
          </NavLayout>
        </AuthRoute>
        <AuthRoute path={'/:id' + path.insertTask}>
          <NavLayout>
            <InsertTask />
          </NavLayout>
        </AuthRoute>

        <AuthRoute path={path.loading}>
          <Loading />
        </AuthRoute>

        <Route path="*">
          <Redirect to={{ pathname: path.top }} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
