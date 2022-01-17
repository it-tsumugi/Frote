import * as H from 'history'

export type updateTaskApiPropsType = {
  task_id: number
  task: string
  history: H.History
  getAllTaskLists: () => Promise<void>[]
}

export type updateTaskPropsType = {
  e: React.FormEvent<HTMLFormElement>
  checkIsSuccess: () => boolean
  task: string
  task_id: number
}
