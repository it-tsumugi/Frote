import axios from 'axios'
import { path } from '../constant/path'
import { registerUserInfoApiPropsType } from '../type/action/registerUserInfoType'

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
        window.alert(res.data.message)
        history.push(path.login)
      } else {
        window.alert(res.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  } catch (error) {
    console.log(error)
  }
}
