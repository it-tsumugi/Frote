import { booleanState } from '../state/atom'
import { booleanStateKey } from '../assets/data/stateKey'
import { useSetRecoilState } from 'recoil'
import { loginApi } from '../api/loginApi'
import { useHistory } from 'react-router'
import { loginPropsType } from '../assets/type/action/loginType'
import { useSetAllInitialData } from './useSetAllInitialData'

export const useLogin = () => {
  const setIsLogin = useSetRecoilState(booleanState(booleanStateKey.isLogin))
  const { setAllInitialData } = useSetAllInitialData()
  const history = useHistory()

  const login = async (props: loginPropsType) => {
    const { checkIsSuccess, email, password, e } = props

    e.preventDefault()
    if (checkIsSuccess()) {
      await loginApi({ email, password, setIsLogin, history, setAllInitialData })
    } else {
      window.alert('入力内容に誤りがあります')
    }
  }
  return { login: login }
}
