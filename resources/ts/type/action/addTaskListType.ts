import * as H from 'history'

export type TaskListFormData = {
  tasks: {
    task: string
  }[]
}

export type addTaskListDataType = {
  e: React.BaseSyntheticEvent<object, any, any> | undefined
  data: TaskListFormData
  isComplete: boolean
  imp: number
  urg: number
  group: string
  history: H.History
  getAllTaskLists: () => void
}

export type addTaskListOnSubmitType = {
  e: React.BaseSyntheticEvent<object, any, any> | undefined
  data: TaskListFormData
}
