import { useEffect, useState, VFC } from 'react'
import { useGetActions } from '../../../hooks/useGetActions'
import { PRegister } from './Presenter'

export const Register: VFC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const { validateLogin, registerUserInfo } = useGetActions()

  const checkIsSuccess = () => {
    if (emailError === '' && passwordError === '' && confirmPasswordError === '' && nameError === '') return true
    else return false
  }

  useEffect(() => {
    validateLogin({
      email,
      password,
      name,
      confirmPassword,
      setEmailError,
      setConfirmPasswordError,
      setNameError,
      setPasswordError
    })
  }, [email, password, name, confirmPassword])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) =>
    registerUserInfo({ e, email, password, name, checkIsSuccess })

  return (
    <PRegister
      onSubmit={onSubmit}
      nameError={nameError}
      emailError={emailError}
      passwordError={passwordError}
      confirmPasswordError={confirmPasswordError}
      setConfirmPassword={setConfirmPassword}
      setEmail={setEmail}
      setName={setName}
      setPassword={setPassword}
    />
  )
}
