import { useHistory } from 'react-router'
import { updateTaskPropsType } from '../type/action/updateTaskType'
import { useGetAllTaskLists } from './useGetAllTaskLists'
import { updateTaskApi } from '../api/updateTaskApi'

export const useUpdateTask = () => {
  const history = useHistory()
  const { getAllTaskLists } = useGetAllTaskLists()

  const updateTask = async (props: updateTaskPropsType) => {
    const { e, checkIsSuccess, task_id, task } = props
    e.preventDefault()
    if (checkIsSuccess()) {
      updateTaskApi({ task, task_id, history, getAllTaskLists })
    } else window.alert('入力に問題があります')
  }

  return { updateTask: updateTask }
}
