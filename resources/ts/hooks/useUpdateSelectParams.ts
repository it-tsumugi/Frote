import { useHistory } from 'react-router'
import { updateSelectParamsApi } from '../api/updateSelectParamsApi'
import { updateSelectParamsPropsType } from '../type/action/updataSelectParamsType'
import { useGetAllTaskLists } from './useGetAllTaskLists'

export const useUpdateSelectParams = () => {
  const history = useHistory()
  const { getAllTaskLists } = useGetAllTaskLists()

  const updateSelectParams = async (props: updateSelectParamsPropsType) => {
    const { e, task_list_id, group, imp, urg } = props
    e.preventDefault()
    updateSelectParamsApi({ task_list_id, imp, urg, group, history, getAllTaskLists })
  }

  return { updateSelectParams: updateSelectParams }
}
