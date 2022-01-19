import { VFC } from 'react'
import { DefaultTextField } from '../../atoms/form/DefaultTextField'
import { ActionButton } from '../../../styles/commonStyles/ActionButton'
import { FormCard } from '../../../styles/commonStyles/FormCard'

type propsType = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  nameError: string
  emailError: string
  passwordError: string
  confirmPasswordError: string
  setName: React.Dispatch<React.SetStateAction<string>>
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>
}

export const PRegister: VFC<propsType> = ({
  onSubmit,
  nameError,
  emailError,
  passwordError,
  confirmPasswordError,
  setConfirmPassword,
  setEmail,
  setName,
  setPassword
}) => {
  return (
    <>
      <h1>登録</h1>
      <FormCard>
        <form onSubmit={(e) => onSubmit(e)}>
          <DefaultTextField
            label="ユーザー名"
            type="text"
            error={Boolean(nameError)}
            helperText={nameError}
            onChange={(e) => setName(e.target.value)}
          />
          <DefaultTextField
            label="メールアドレス"
            type="email"
            error={Boolean(emailError)}
            helperText={emailError}
            onChange={(e) => setEmail(e.target.value)}
          />
          <DefaultTextField
            label="パスワード"
            type="password"
            error={Boolean(passwordError)}
            helperText={passwordError}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span style={{ margin: '20px 0' }}>確認用にもう一度パスワードを入力してください</span>
          <DefaultTextField
            label="確認用パスワード"
            type="password"
            error={Boolean(confirmPasswordError)}
            helperText={confirmPasswordError}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <ActionButton type="submit">登録</ActionButton>
        </form>
      </FormCard>
    </>
  )
}
