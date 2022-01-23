import { VFC } from 'react'
import { taskType } from '../../../../type/dataType'
import { deleteTaskApi } from '../../../../api/deleteTaskApi'
import { useGetActions } from '../../../../hooks/useGetActions'
import { PTask } from './Presenter'
import { useHistory } from 'react-router'
import { path } from '../../../../constant/path'

type propsType = {
  task: taskType
  task_list_id: number
  isDelete: boolean
  index: number
}

export const Task: VFC<propsType> = (props) => {
  const { task, task_list_id, isDelete, index } = props
  const { getAllTaskLists, getTask } = useGetActions()
  const history = useHistory()
  const editTaskPath = `/${task.task_id}` + path.editTask
  const onClick = () => deleteTaskApi({ task, task_list_id, getAllTaskLists })

  const editTaskHandler = () => {
    getTask({ task_id: task.task_id }).then(() => {
      history.push(editTaskPath)
    })
  }

  return <PTask task={task} isDelete={isDelete} index={index} onClick={onClick} editTaskHandler={editTaskHandler} />
}
