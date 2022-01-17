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
    addTasks
  }
}
