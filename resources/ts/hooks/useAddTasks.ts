import { useHistory } from 'react-router'
import { SubmitHandler } from 'react-hook-form'
import { addTasksDataType } from '../type/action/addTasksType'
import { addTasksApi } from '../api/addTasksApi'
import { useGetAllTaskLists } from './useGetAllTaskLists'

export const useAddTasks = () => {
  const history = useHistory()
  const { getAllTaskLists } = useGetAllTaskLists()

  const addTasks: SubmitHandler<addTasksDataType> = async ({ e, data, isComplete, setIsComplete, task_list_id }) => {
    const tasks = data.tasks
    e?.preventDefault()
    if (isComplete) {
      addTasksApi({ task_list_id, tasks, history, setIsComplete, getAllTaskLists })
      await getAllTaskLists()
    }
  }

  return { addTasks: addTasks }
}
