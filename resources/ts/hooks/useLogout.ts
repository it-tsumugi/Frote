import { useHistory } from 'react-router'
import { booleanStateKey } from '../constant/stateKey'
import { booleanState } from '../state/atom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { logoutApi } from '../api/logoutApi'

export const useLogout = () => {
  const setIsLogin = useSetRecoilState(booleanState(booleanStateKey.isLogin))
  const history = useHistory()

  const logout = async () => logoutApi({ setIsLogin, history })

  return { logout: logout }
}
