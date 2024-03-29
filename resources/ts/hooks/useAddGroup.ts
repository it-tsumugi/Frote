import { useHistory } from 'react-router'
import { addGroupApi } from '../api/addGroupApi'
import { useGetGroupList } from './useGetGroupList'
import { useGetGroupTaskLists } from './useGetGroupTaskLists'

type addGroupPropsType = {
  e: React.FormEvent<HTMLFormElement>
  checkIsSuccess: () => boolean
  group: string
}

export const useAddGroup = () => {
  const history = useHistory()
  const { getGroupList } = useGetGroupList()
  const { getGroupTaskLists } = useGetGroupTaskLists()

  const addGroup = async (props: addGroupPropsType) => {
    const { e, checkIsSuccess, group } = props

    e.preventDefault()
    if (checkIsSuccess()) {
      addGroupApi({ history, group, getGroupList, getGroupTaskLists })
    } else {
      window.alert('入力に問題があります')
    }
  }

  return { addGroup: addGroup }
}
