import { VFC } from 'react'
import { taskListsState } from '../../../../state/atom'
import { TaskLists } from '../../../organisms/TaskLists'
import { useRecoilValue } from 'recoil'

export const Home: VFC = () => {
  const taskLists = useRecoilValue(taskListsState)

  return <TaskLists taskLists={taskLists} />
}
