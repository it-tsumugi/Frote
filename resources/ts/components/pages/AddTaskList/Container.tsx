import { useState, VFC } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { numberStateKey, stringStateKey } from '../../../constant/stateKey'
import { numberState, stringState } from '../../../state/atom'
import { useGetActions } from '../../../hooks/useGetActions'
import { PAddTaskList } from './Presenter'
import { addTaskListOnSubmitType } from '../../../type/action/addTaskListType'
import { addTasksFormDataType } from '../../../type/action/addTasksType'

export const AddTaskList: VFC = () => {
  const imp = useRecoilValue(numberState(numberStateKey.imp))
  const urg = useRecoilValue(numberState(numberStateKey.urg))
  const group = useRecoilValue(stringState(stringStateKey.group))
  const { control, register, handleSubmit } = useForm<addTasksFormDataType>({
    defaultValues: {
      tasks: [{ task: '' }]
    }
  })
  const { fields, append, remove, insert } = useFieldArray({
    control,
    name: 'tasks'
  })
  const [isComplete, setIsComplete] = useState(false)
  const onClick = () => setIsComplete(true)
  const { addTaskList } = useGetActions()
  const onSubmit = (props: addTaskListOnSubmitType) => {
    const { e, data } = props
    addTaskList({ e, data, isComplete, group, imp, urg })
  }

  return (
    <PAddTaskList
      handleSubmit={handleSubmit}
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
