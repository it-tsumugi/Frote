import { validateLoginPropsType } from '../type/action/registerUserInfo'
import { errorMessages } from '../constant/errorMessages'

export const useValidateLogin = () => {
  const validateLogin = (props: validateLoginPropsType) => {
    const {
      email,
      name,
      password,
      confirmPassword,
      setNameError,
      setEmailError,
      setPasswordError,
      setConfirmPasswordError
    } = props

    if (email.length === 0) setEmailError(errorMessages.email.blank)
    else if (email.length > 30) setEmailError(errorMessages.email.maxLength)
    else setEmailError('')

    if (password.length === 0) setPasswordError(errorMessages.password.blank)
    else if (password.length > 30) setPasswordError(errorMessages.password.maxLength)
    else if (password.length < 8) setPasswordError(errorMessages.password.minLength)
    else setPasswordError('')

    if (confirmPassword.length === 0) setConfirmPasswordError(errorMessages.confirmPassword.blank)
    else if (confirmPassword !== password) setConfirmPasswordError(errorMessages.confirmPassword.notMatch)
    else setConfirmPasswordError('')

    if (name.length === 0) setNameError(errorMessages.name.blank)
    else if (name.length > 30) setNameError(errorMessages.name.maxLength)
    else setNameError('')
  }
  return { validateLogin: validateLogin }
}
