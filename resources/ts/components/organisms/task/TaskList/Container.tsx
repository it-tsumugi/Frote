import { useState, VFC } from 'react'
import { taskListType } from '../../../../type/dataType'
import { PTaskList } from './Presenter'

type propsType = {
  taskList: taskListType
  priority: number
}

export const TaskList: VFC<propsType> = ({ taskList, priority }) => {
  const isDelete = taskList.task.length !== 1
  const [isDisplay, setIsDisplay] = useState(false)

  return (
    <PTaskList
      taskList={taskList}
      priority={priority}
      isDisplay={isDisplay}
      isDelete={isDelete}
      setIsDisplay={setIsDisplay}
    />
  )
}
