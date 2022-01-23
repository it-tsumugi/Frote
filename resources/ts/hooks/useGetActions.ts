import { useGetTaskLists } from './useGetTaskLists'
import { useGetImpTaskLists } from './useGetImpTaskLists'
import { useGetUrgTaskLists } from './useGetUrgTaskLists'
import { useGetGroupTaskLists } from './useGetGroupTaskLists'
import { useGetAllTaskLists } from './useGetAllTaskLists'
import { useSetAllInitialData } from './useSetAllInitialData'
import { useLogin } from './useLogin'
import { useAuth } from './useAuth'
import { useRegisterUserInfo } from './useRegisterUserInfo'
import { useValidateLogin } from './useValidateLogin'
import { useAddTasks } from './useAddTasks'
import { useAddGroup } from './useAddGroup'
import { useInsertTask } from './useInsertTask'
import { useUpdateGroup } from './useUpdateGroup'
import { useUpdateTask } from './useUpdateTask'
import { useUpdateSelectParams } from './useUpdateSelectParams'
import { useLogout } from './useLogout'
import { useGetGroupList } from './useGetGroupList'
import { useDeleteGroup } from './useDeleteGroup'
import { useAddTaskList } from './useAddTaskList'
import { useDeleteTaskList } from './useDeleteTaskList'
import { useGetGroup } from './useGetGroup'
import { useGetSelectParams } from './useGetSelectParams'

export const useGetActions = () => {
  const { getTaskLists } = useGetTaskLists()
  const { getImpTaskLists } = useGetImpTaskLists()
  const { getUrgTaskLists } = useGetUrgTaskLists()
  const { getGroupTaskLists } = useGetGroupTaskLists()
  const { getAllTaskLists } = useGetAllTaskLists()
  const { setAllInitialData } = useSetAllInitialData()
  const { login } = useLogin()
  const { auth } = useAuth()
  const { registerUserInfo } = useRegisterUserInfo()
  const { validateLogin } = useValidateLogin()
  const { addTasks } = useAddTasks()
  const { addGroup } = useAddGroup()
  const { insertTask } = useInsertTask()
  const { updateGroup } = useUpdateGroup()
  const { updateTask } = useUpdateTask()
  const { updateSelectParams } = useUpdateSelectParams()
  const { logout } = useLogout()
  const { getGroupList } = useGetGroupList()
  const { deleteGroup } = useDeleteGroup()
  const { addTaskList } = useAddTaskList()
  const { deleteTaskList } = useDeleteTaskList()
  const { getGroup } = useGetGroup()
  const { getSelectParams } = useGetSelectParams()

  return {
    getTaskLists,
    getImpTaskLists,
    getUrgTaskLists,
    getGroupTaskLists,
    getAllTaskLists,
    setAllInitialData,
    login,
    auth,
    registerUserInfo,
    validateLogin,
    addTasks,
    addGroup,
    insertTask,
    updateGroup,
    updateTask,
    updateSelectParams,
    logout,
    getGroupList,
    deleteGroup,
    addTaskList,
    deleteTaskList,
    getGroup,
    getSelectParams
  }
}
