import { useHistory } from 'react-router'
import { useGetAllTaskLists } from './useGetAllTaskLists'
import { toggleIsWaitPropsType } from '../type/action/toggleIsWaitType'
import { toggleIsWaitApi } from '../api/toggleIsWaitApi'

export const useToggleIsWait = () => {
  const history = useHistory()
  const { getAllTaskLists } = useGetAllTaskLists()

  const toggleIsWait = async (props: toggleIsWaitPropsType) => {
    const { task_list_id } = props
    toggleIsWaitApi({ task_list_id, history, getAllTaskLists })
  }

  return { toggleIsWait: toggleIsWait }
}
