import { FieldArrayMethodProps, FieldArrayWithId, UseFormRegister } from 'react-hook-form'

export type tasksType = {
  task: string
}[]

export type addTasksFormDataType = {
  tasks: tasksType
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
