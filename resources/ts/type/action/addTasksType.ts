import * as H from 'history'
import { FieldArrayMethodProps, FieldArrayWithId, UseFormRegister } from 'react-hook-form'

export type addTasksApiPropsType = {
  task_list_id: number
  tasks: tasksType
  history: H.History
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>
  getAllTaskLists: () => Promise<void>
}

export type tasksType = {
  task: string
}[]

export type addTasksFormDataType = {
  tasks: tasksType
}

export type addTasksDataType = {
  e: React.BaseSyntheticEvent<object, any, any> | undefined
  data: addTasksFormDataType
  isComplete: boolean
  task_list_id: number
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>
}

export type addTasksFieldsType = FieldArrayWithId<addTasksFormDataType, 'tasks', 'id'>[]
export type addTasksAppendType = (
  value:
    | Partial<{
        task: string
      }>
    | Partial<{
        task: string
      }>[],
  options?: FieldArrayMethodProps | undefined
) => void
export type addTasksRemoveType = (index?: number | number[] | undefined) => void
export type addTasksInsertType = (
  index: number,
  value:
    | Partial<{
        task: string
      }>
    | Partial<{
        task: string
      }>[],
  options?: FieldArrayMethodProps | undefined
) => void
export type addTasksRegisterType = UseFormRegister<addTasksFormDataType>
