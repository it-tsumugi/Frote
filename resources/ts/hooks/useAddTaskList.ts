import { SubmitHandler } from 'react-hook-form'
import { addTasksFormDataType } from '../type/action/addTasksType'
import { addTaskListApi } from '../api/addTaskListApi'
import { useHistory } from 'react-router'
import { useGetAllTaskLists } from './useGetAllTaskLists'

type addTaskListDataType = {
  e: React.BaseSyntheticEvent<object, any, any> | undefined
  data: addTasksFormDataType
  isGroupExist: boolean
  imp: number
  urg: number
  group: string
}

export const useAddTaskList = () => {
  const history = useHistory()
  const { getAllTaskLists } = useGetAllTaskLists()

  const addTaskList: SubmitHandler<addTaskListDataType> = async ({ e, data, isGroupExist, group, imp, urg }) => {
    const tasks = data.tasks
    e?.preventDefault()
    if (isGroupExist) {
      addTaskListApi({ imp, urg, group, tasks, getAllTaskLists, history })
    } else {
      window.alert('グループを追加してください')
    }
  }

  return { addTaskList: addTaskList }
}
