import axios from 'axios'
import { SetterOrUpdater } from 'recoil'

type propsType = {
  setIsLogin: SetterOrUpdater<boolean>
}

export const authApi = async (props: propsType) => {
  const { setIsLogin } = props

  try {
    const res = await axios.get('/api/auth')
    const isLogin = res.data.isLogin
    setIsLogin(isLogin)
    return isLogin
  } catch (err) {
    console.log(err)
    setIsLogin(false)
    return false
  }
}
