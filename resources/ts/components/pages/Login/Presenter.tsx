import { VFC } from 'react'
import styled from 'styled-components'
import { DefaultTextField } from '../../atoms/form/DefaultTextField'
import { FormCard } from '../../atoms/form/FormCard'
import { ActionButton } from '../../atoms/button/ActionButton'
import { SText, STitle } from '../../atoms/style/TextStyle'
import { loginPropsType } from '../../../assets/type/action/loginType'

type propsType = {
  login: (props: loginPropsType) => void
  email: string
  password: string
  checkIsSuccess: () => boolean
  setEmail: React.Dispatch<React.SetStateAction<string>>
  emailError: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  passwordError: string
}

export const PLogin: VFC<propsType> = ({
  login,
  email,
  password,
  checkIsSuccess,
  setEmail,
  emailError,
  passwordError,
  setPassword
}) => {
  return (
    <SComponentContainer>
      <STitle>ログイン</STitle>
      <SText>お試しで利用したい人はメールアドレスfrote@frote、パスワードfrotefroteでログイン可能です</SText>
      <FormCard>
        <form onSubmit={(e) => login({ e, email, password, checkIsSuccess })}>
          <DefaultTextField
            name="email"
            type="email"
            label="メールアドレス"
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(emailError)}
            helperText={emailError}
          />
          <DefaultTextField
            name="password"
            type="password"
            label="パスワード"
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />
          <ActionButton type="submit">Login</ActionButton>
        </form>
      </FormCard>
    </SComponentContainer>
  )
}

const SComponentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 80vw;
`
