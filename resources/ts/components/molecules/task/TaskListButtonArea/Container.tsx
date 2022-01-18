import { VFC } from 'react'
import { taskListType } from '../../../../type/dataType'
import { deleteTaskList } from '../../../../api/deleteTaskList'
import { useGetActions } from '../../../../hooks/useGetActions'
import { PTaskListButtonArea } from './Presenter'

type propsType = {
  taskList: taskListType
  isChecked: boolean
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export const TaskListButtonArea: VFC<propsType> = ({ taskList, isChecked, setIsChecked }) => {
  const { getAllTaskLists } = useGetActions()
  const deleteHandler = () => deleteTaskList({ getAllTaskLists, task_list_id: taskList.task_list_id })
  const toggleHandler = () => setIsChecked(!isChecked)

  return (
    <PTaskListButtonArea
      taskList={taskList}
      isChecked={isChecked}
      deleteHandler={deleteHandler}
      toggleHandler={toggleHandler}
    />
  )
}
