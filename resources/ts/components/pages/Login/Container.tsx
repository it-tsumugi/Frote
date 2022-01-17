import { useEffect, useState } from 'react'
import { errorMessages } from '../../../constant/errorMessages'
import { useGetActions } from '../../../hooks/useGetActions'
import { PLogin } from './Presenter'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const { login } = useGetActions()

  const validateLogin = () => {
    if (email.length === 0) setEmailError(errorMessages.email.blank)
    else if (email.length > 30) setEmailError(errorMessages.email.maxLength)
    else setEmailError('')

    if (password.length === 0) setPasswordError(errorMessages.password.blank)
    else if (password.length > 30) setPasswordError(errorMessages.password.maxLength)
    else if (password.length < 8) setPasswordError(errorMessages.password.minLength)
    else setPasswordError('')
  }

  const checkIsSuccess = () => {
    if (emailError === '' && passwordError === '') return true
    else return false
  }

  useEffect(() => validateLogin(), [email, password])

  return (
    <PLogin
      login={login}
      email={email}
      password={password}
      checkIsSuccess={checkIsSuccess}
      setEmail={setEmail}
      emailError={emailError}
      setPassword={setPassword}
      passwordError={passwordError}
    />
  )
}
