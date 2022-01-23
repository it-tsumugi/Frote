import { VFC } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { numberStateKey, stringStateKey } from '../../../constant/stateKey'
import { groupListsState, numberState, stringState } from '../../../state/atom'
import { useGetActions } from '../../../hooks/useGetActions'
import { PAddTaskList } from './Presenter'
import { addTaskListOnSubmitType } from '../../../type/action/addTaskListType'
import { addTasksFormDataType } from '../../../type/action/addTasksType'

export const AddTaskList: VFC = () => {
  const imp = useRecoilValue(numberState(numberStateKey.imp))
  const urg = useRecoilValue(numberState(numberStateKey.urg))
  const group = useRecoilValue(stringState(stringStateKey.group))
  const groupLists = useRecoilValue(groupListsState)
  const isGroupExist = groupLists.length !== 0
  const { control, register, handleSubmit } = useForm<addTasksFormDataType>({
    defaultValues: {
      tasks: [{ task: '' }]
    }
  })
  const { fields, append, remove, insert } = useFieldArray({
    control,
    name: 'tasks'
  })

  const { addTaskList } = useGetActions()
  const onSubmit = (props: addTaskListOnSubmitType) => {
    const { e, data } = props
    addTaskList({ e, data, isGroupExist, group, imp, urg })
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
    />
  )
}
