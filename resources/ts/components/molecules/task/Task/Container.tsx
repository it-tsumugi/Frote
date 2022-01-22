import { VFC } from 'react'
import { taskType } from '../../../../type/dataType'
import { deleteTaskApi } from '../../../../api/deleteTaskApi'
import { useGetActions } from '../../../../hooks/useGetActions'
import { PTask } from './Presenter'

type propsType = {
  task: taskType
  task_list_id: number
  isDelete: boolean
  index: number
}

export const Task: VFC<propsType> = (props) => {
  const { task, task_list_id, isDelete, index } = props
  const { getAllTaskLists } = useGetActions()
  const onClick = () => deleteTaskApi({ task, task_list_id, getAllTaskLists })

  return <PTask task={task} isDelete={isDelete} index={index} onClick={onClick} />
}
