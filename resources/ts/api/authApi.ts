import axios from 'axios'
import { SetterOrUpdater } from 'recoil'

type propsType = {
  setIsLogin: SetterOrUpdater<boolean>
}

export const authApi = async (props: propsType) => {
  const { setIsLogin } = props

  try {
    const res = await axios.get('/api/auth')
    const isLogin: boolean = res.data.isLogin
    setIsLogin(isLogin)
    console.log('useAuth:ログイン情報を取得しisLoginセットしました')
    return isLogin
  } catch (error) {
    console.log('useAuth:エラー')
    setIsLogin(false)
    return false
  }
}
