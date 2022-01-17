import { useState, VFC } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { useRecoilValue } from 'recoil'
import { numberStateKey, stringStateKey } from '../../../../../assets/data/stateKey'
import { numberState, stringState } from '../../../../../state/atom'
import { useGetActions } from '../../../../../hooks/useGetActions'
import { PAddTaskList } from './Presenter'
import { addTaskList } from '../../../../../api/addTaskList'
import { addTaskListOnSubmitType, TaskListFormData } from '../../../../../assets/type/action/addTaskListType'

export const AddTaskList: VFC = () => {
  const imp = useRecoilValue(numberState(numberStateKey.imp))
  const urg = useRecoilValue(numberState(numberStateKey.urg))
  const group = useRecoilValue(stringState(stringStateKey.group))
  const history = useHistory()
  const { control, register, handleSubmit } = useForm<TaskListFormData>({
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
  const { getAllTaskLists } = useGetActions()
  const onSubmit = (props: addTaskListOnSubmitType) => {
    const { e, data } = props
    addTaskList({ e, data, isComplete, group, imp, urg, history, getAllTaskLists })
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
