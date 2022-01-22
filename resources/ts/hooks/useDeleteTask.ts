import { deleteTaskApi } from '../api/deleteTaskApi'
import { taskType } from '../type/dataType'
import { useGetAllTaskLists } from './useGetAllTaskLists'

type propsType = {
  task: taskType
  task_list_id: number
}

export const useDeleteTask = () => {
  const { getAllTaskLists } = useGetAllTaskLists()

  const deleteTask = async (props: propsType) => {
    const { task, task_list_id } = props
    deleteTaskApi({ task, task_list_id, getAllTaskLists })
  }
  return { deleteTask: deleteTask }
}
