export type loginPropsType = {
  checkIsSuccess: () => boolean
  email: string
  password: string
  e: React.FormEvent<HTMLFormElement>
}
