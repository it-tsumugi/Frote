import { VFC } from 'react'
import { taskListType } from '../../../../type/dataType'
import { useGetActions } from '../../../../hooks/useGetActions'
import { PTaskListButtonArea } from './Presenter'
import { useHistory } from 'react-router'
import { path } from '../../../../constant/path'

type propsType = {
  taskList: taskListType
  isDisplay: boolean
  setIsDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

export const TaskListButtonArea: VFC<propsType> = ({ taskList, isDisplay, setIsDisplay }) => {
  const { deleteTaskList, getSelectParams, toggleIsWait } = useGetActions()
  const history = useHistory()
  const deleteHandler = () => deleteTaskList({ task_list_id: taskList.task_list_id })
  const toggleHandler = () => setIsDisplay(!isDisplay)
  const toggleIsWaitHandler = () => toggleIsWait({ task_list_id: taskList.task_list_id })
  const editTaskListPath = `/${taskList.task_list_id}` + path.editTaskList

  const fetchParamsHandler = () => {
    getSelectParams({ task_list_id: taskList.task_list_id }).then(() => {
      history.push(editTaskListPath)
    })
  }

  return (
    <PTaskListButtonArea
      taskList={taskList}
      isDisplay={isDisplay}
      deleteHandler={deleteHandler}
      toggleHandler={toggleHandler}
      fetchParamsHandler={fetchParamsHandler}
      toggleIswaitHandler={toggleIsWaitHandler}
    />
  )
}
