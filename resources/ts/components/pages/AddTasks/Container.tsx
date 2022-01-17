import { useState, VFC } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import { addTasksFormDataType } from '../../../type/action/addTasksType'
import { useGetActions } from '../../../hooks/useGetActions'
import { PAddTasks } from './Presenter'

export const AddTasks: VFC = () => {
  const { id } = useParams<{ id: string }>()
  const task_list_id = Number(id)
  const [isComplete, setIsComplete] = useState(false)
  const { addTasks } = useGetActions()
  const { control, register, handleSubmit } = useForm<addTasksFormDataType>({
    defaultValues: {
      tasks: [{ task: '' }]
    }
  })
  const { fields, append, remove, insert } = useFieldArray({
    control,
    name: 'tasks'
  })
  const onClick = () => {
    setIsComplete(true)
  }
  const onSubmit = handleSubmit((data, e) => addTasks({ e, data, isComplete, task_list_id, setIsComplete }))

  return (
    <PAddTasks
      onSubmit={onSubmit}
      fields={fields}
      append={append}
      remove={remove}
      insert={insert}
      register={register}
      onClick={onClick}
    />
  )
}
