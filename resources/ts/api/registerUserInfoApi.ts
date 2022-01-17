import axios from 'axios'
import { path } from '../constant/path'
import { registerUserInfoApiPropsType } from '../type/action/registerUserInfo'

export const registerUserInfoApi = async (props: registerUserInfoApiPropsType) => {
  const { name, email, password, history } = props

  try {
    await axios.get('/sanctum/csrf-cookie')
    try {
      const res = await axios.post('/api/register', {
        name,
        email,
        password
      })
      if (res.data.result) {
        console.log('registerUserName:登録成功')
        window.alert(res.data.message)
        history.push(path.login)
      } else {
        console.log('registerUserName:登録失敗')
        window.alert(res.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  } catch (error) {
    console.log(error)
  }
}
