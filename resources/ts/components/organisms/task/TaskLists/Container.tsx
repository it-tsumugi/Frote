import { VFC } from 'react'
import { taskListType } from '../../../../type/dataType'
import { PTaskLists } from './Presenter'

type propsType = {
  taskLists: taskListType[]
}

export const TaskLists: VFC<propsType> = (props) => {
  const { taskLists } = props

  return <PTaskLists taskLists={taskLists} />
}
