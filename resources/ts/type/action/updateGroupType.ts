import * as H from 'history'

export type updateGroupApiPropsType = {
  id: number
  group: string
  history: H.History
}

export type updateGroupPropsType = {
  e: React.FormEvent<HTMLFormElement>
  checkIsSuccess: () => boolean
  group: string
  id: number
}
