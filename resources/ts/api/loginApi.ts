import axios from 'axios'
import { SetterOrUpdater } from 'recoil'
import * as H from 'history'

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
        const promiseArray = setAllInitialData()
        Promise.all(promiseArray).then(() => {
          setIsLogin(true)
          history.push({ pathname: '/home' })
        })
      } else {
        console.log('login:ログイン失敗')
        window.alert(res.data.message)
        console.log(res.data.message)
      }
    } catch (err) {
      console.log('login:接続に失敗しました')
      console.log(err)
    }
  } catch (error) {
    console.log('login:CSRFトークンの初期化に失敗しました')
    console.log(error)
  }
}
