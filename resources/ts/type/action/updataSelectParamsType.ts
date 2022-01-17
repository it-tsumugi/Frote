import * as H from 'history'

export type updateSelectParamsApiPropsType = {
  task_list_id: number
  group: string
  imp: number
  urg: number
  history: H.History
  getAllTaskLists: () => Promise<void>[]
}

export type updateSelectParamsPropsType = {
  e: React.FormEvent<HTMLFormElement>
  task_list_id: number
  group: string
  imp: number
  urg: number
}
