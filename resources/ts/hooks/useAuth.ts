import { useSetRecoilState } from 'recoil'
import { booleanStateKey } from '../assets/data/stateKey'
import { booleanState } from './../state/atom'
import { authApi } from '../api/authApi'

export const useAuth = () => {
  const setIsLogin = useSetRecoilState(booleanState(booleanStateKey.isLogin))

  const auth = async () => {
    const isLogin = await authApi({ setIsLogin })
    return isLogin
  }

  return { auth: auth }
}
