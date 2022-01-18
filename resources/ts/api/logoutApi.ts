import axios from 'axios'
import { SetterOrUpdater } from 'recoil'
import * as H from 'history'

type propsType = {
  setIsLogin: SetterOrUpdater<boolean>
  history: H.History
}

export const logoutApi = async (props: propsType) => {
  const { setIsLogin, history } = props

  try {
    const res = await axios.get('/api/logout')
    setIsLogin(false)
    history.push({ pathname: '/login' })
  } catch (err) {
    console.log(err)
  }
}
