import * as H from 'history'

export type registerUserInfoApiPropsType = {
  name: string
  email: string
  password: string
  history: H.History
}

export type registerUserInfoPropsType = {
  e: React.FormEvent<HTMLFormElement>
  checkIsSuccess: () => boolean
  name: string
  email: string
  password: string
}

export type validateLoginPropsType = {
  email: string
  password: string
  confirmPassword: string
  name: string
  setEmailError: React.Dispatch<React.SetStateAction<string>>
  setPasswordError: React.Dispatch<React.SetStateAction<string>>
  setConfirmPasswordError: React.Dispatch<React.SetStateAction<string>>
  setNameError: React.Dispatch<React.SetStateAction<string>>
}
