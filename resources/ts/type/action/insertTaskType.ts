import * as H from 'history'

export type insertTaskApiPropsType = {
  task: string
  task_id: number
  history: H.History
  getAllTaskLists: () => Promise<void>
}

export type insertTaskPropsType = {
  e: React.FormEvent<HTMLFormElement>
  checkIsSuccess: () => boolean
  task: string
  task_id: number
}
