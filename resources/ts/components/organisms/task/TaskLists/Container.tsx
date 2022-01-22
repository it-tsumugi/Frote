import { VFC } from 'react'
import { taskListType } from '../../../../type/dataType'
import { PTaskLists } from './Presenter'

type propsType = {
  taskLists: taskListType[]
}

export const TaskLists: VFC<propsType> = ({ taskLists }) => {
  return <PTaskLists taskLists={taskLists} />
}
