import { updateGroupApi } from '../api/updateGroupApi'
import { updateGroupPropsType } from '../type/action/updateGroupType'
import { useHistory } from 'react-router'
import { useGetGroupList } from './useGetGroupList'

export const useUpdateGroup = () => {
  const history = useHistory()
  const { getGroupList } = useGetGroupList()

  const updateGroup = async (props: updateGroupPropsType) => {
    const { e, checkIsSuccess, group, id } = props

    e.preventDefault()
    if (checkIsSuccess()) {
      updateGroupApi({ id, group, history, getGroupList })
    } else {
      window.alert('入力に問題があります')
    }
  }

  return { updateGroup: updateGroup }
}
