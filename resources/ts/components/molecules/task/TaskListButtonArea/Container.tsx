import { VFC } from 'react'
import { taskListType } from '../../../../type/dataType'
import { deleteTaskList } from '../../../../api/deleteTaskList'
import { useGetActions } from '../../../../hooks/useGetActions'
import { PTaskListButtonArea } from './Presenter'

type propsType = {
  taskList: taskListType
  isDisplay: boolean
  setIsDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

export const TaskListButtonArea: VFC<propsType> = ({ taskList, isDisplay, setIsDisplay }) => {
  const { getAllTaskLists } = useGetActions()
  const deleteHandler = () => deleteTaskList({ getAllTaskLists, task_list_id: taskList.task_list_id })
  const toggleHandler = () => setIsDisplay(!isDisplay)

  return (
    <PTaskListButtonArea
      taskList={taskList}
      isDisplay={isDisplay}
      deleteHandler={deleteHandler}
      toggleHandler={toggleHandler}
    />
  )
}
