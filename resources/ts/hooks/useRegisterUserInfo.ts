import { registerUserInfoApi } from '../api/registerUserInfoApi'
import { registerUserInfoPropsType } from '../assets/type/action/registerUserInfo'
import { useHistory } from 'react-router'

export const useRegisterUserInfo = () => {
  const history = useHistory()

  const registerUserInfo = async (props: registerUserInfoPropsType) => {
    const { e, checkIsSuccess, name, email, password } = props

    e.preventDefault()
    if (checkIsSuccess()) {
      registerUserInfoApi({ name, email, password, history })
    } else {
      window.alert('入力形式に問題があります')
    }
  }

  return { registerUserInfo: registerUserInfo }
}
