import { insertTaskApi } from '../api/insertTaskApi'
import { insertTaskPropsType } from '../type/action/insertTaskType'
import { useHistory } from 'react-router'
import { useGetAllTaskLists } from './useGetAllTaskLists'

export const useInsertTask = () => {
  const history = useHistory()
  const { getAllTaskLists } = useGetAllTaskLists()

  const insertTask = async (props: insertTaskPropsType) => {
    const { e, checkIsSuccess, task_id, task } = props
    e.preventDefault()

    if (checkIsSuccess()) {
      insertTaskApi({ task, task_id, history, getAllTaskLists })
    } else window.alert('入力に問題があります')
  }

  return { insertTask: insertTask }
}
