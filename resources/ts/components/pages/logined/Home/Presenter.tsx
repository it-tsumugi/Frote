import { VFC } from 'react'
import { TaskLists } from '../../../organisms/TaskLists'
import { TaskListsButtonArea } from '../../../molecules/task/TaskListsButtonArea'
import { taskListType } from '../../../../assets/type/dataType'

type propsType = {
  taskLists: taskListType[]
}

export const PHome: VFC<propsType> = ({ taskLists }) => {
  return (
    <>
      <TaskLists taskLists={taskLists} />
      <TaskListsButtonArea />
    </>
  )
}
