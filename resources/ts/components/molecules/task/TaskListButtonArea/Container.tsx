import { VFC } from 'react'
import { taskListType } from '../../../../type/dataType'
import { useGetActions } from '../../../../hooks/useGetActions'
import { PTaskListButtonArea } from './Presenter'

type propsType = {
  taskList: taskListType
  isDisplay: boolean
  setIsDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

export const TaskListButtonArea: VFC<propsType> = ({ taskList, isDisplay, setIsDisplay }) => {
  const { deleteTaskList } = useGetActions()
  const deleteHandler = () => deleteTaskList({ task_list_id: taskList.task_list_id })
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
