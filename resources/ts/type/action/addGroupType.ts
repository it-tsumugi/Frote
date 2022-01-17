import * as H from 'history'

export type addGroupApiPropsType = {
  group: string
  history: H.History
}

export type addGroupPropsType = {
  e: React.FormEvent<HTMLFormElement>
  checkIsSuccess: () => boolean
  group: string
}
