import * as H from 'history'
import { addTasksFormDataType } from './addTasksType'

export type addTaskListDataType = {
  e: React.BaseSyntheticEvent<object, any, any> | undefined
  data: addTasksFormDataType
  isComplete: boolean
  imp: number
  urg: number
  group: string
  history: H.History
  getAllTaskLists: () => void
}

export type addTaskListOnSubmitType = {
  e: React.BaseSyntheticEvent<object, any, any> | undefined
  data: addTasksFormDataType
}
