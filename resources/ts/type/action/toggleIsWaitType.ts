import * as H from 'history'

export type toggleIsWaitApiPropsType = {
  task_list_id: number
  history: H.History
  getAllTaskLists: () => Promise<void>
}

export type toggleIsWaitPropsType = {
  task_list_id: number
}
