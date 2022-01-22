import { useHistory } from 'react-router'
import { SubmitHandler } from 'react-hook-form'
import { addTasksFormDataType } from '../type/action/addTasksType'
import { addTasksApi } from '../api/addTasksApi'
import { useGetAllTaskLists } from './useGetAllTaskLists'

type addTasksDataType = {
  e: React.BaseSyntheticEvent<object, any, any> | undefined
  data: addTasksFormDataType
  task_list_id: number
}

export const useAddTasks = () => {
  const history = useHistory()
  const { getAllTaskLists } = useGetAllTaskLists()

  const addTasks: SubmitHandler<addTasksDataType> = async ({ e, data, task_list_id }) => {
    const tasks = data.tasks
    e?.preventDefault()
    await addTasksApi({ task_list_id, tasks, history, getAllTaskLists })
    await getAllTaskLists()
  }

  return { addTasks: addTasks }
}
