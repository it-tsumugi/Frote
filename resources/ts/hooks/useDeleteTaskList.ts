import { useGetAllTaskLists } from './useGetAllTaskLists'
import { deleteTaskListApi } from '../api/deleteTaskListApi'

type propsType = {
  task_list_id: number
}

export const useDeleteTaskList = () => {
  const { getAllTaskLists } = useGetAllTaskLists()

  const deleteTaskList = async (props: propsType) => {
    const { task_list_id } = props
    await deleteTaskListApi({ getAllTaskLists, task_list_id })
  }

  return { deleteTaskList: deleteTaskList }
}
