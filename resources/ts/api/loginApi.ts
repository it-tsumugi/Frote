import axios from 'axios'
import { SetterOrUpdater } from 'recoil'
import * as H from 'history'
import { path } from '../constant/path'

type propsType = {
  email: string
  password: string
  setIsLogin: SetterOrUpdater<boolean>
  history: H.History
  setAllInitialData: () => Promise<void>[]
}

export const loginApi = async (props: propsType) => {
  const { email, password, setIsLogin, history, setAllInitialData } = props

  try {
    // ログイン時にCSRFトークンを初期化
    await axios.get('/sanctum/csrf-cookie')
    try {
      const res = await axios.post('/api/login', {
        email,
        password
      })
      if (res.data.result) {
        console.log('login:ログイン成功')
        history.push({ pathname: path.loading })
        const promiseArray = setAllInitialData()
        Promise.all(promiseArray).then(() => {
          setIsLogin(true)
          history.push({ pathname: path.home })
        })
      } else {
        window.alert(res.data.message)
        console.log(res.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  } catch (error) {
    console.log(error)
  }
}
