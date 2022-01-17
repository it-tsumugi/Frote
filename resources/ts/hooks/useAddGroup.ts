import { addGroupPropsType } from '../type/action/addGroup'
import { useHistory } from 'react-router'
import { addGroupApi } from '../api/addGroupApi'

export const useAddGroup = () => {
  const history = useHistory()

  const addGroup = async (props: addGroupPropsType) => {
    const { e, checkIsSuccess, group } = props

    e.preventDefault()
    if (checkIsSuccess()) {
      addGroupApi({ history, group })
    } else {
      window.alert('入力に問題があります')
    }
  }

  return { addGroup: addGroup }
}
