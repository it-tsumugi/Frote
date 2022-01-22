import { VFC } from 'react'
import { taskListsState } from '../../../state/atom'
import { useRecoilValue } from 'recoil'
import { PHome } from './Presenter'
import { fetchAllTaskLists } from '../../../api/fetchAllTaskLists'

export const Home: VFC = () => {
  const taskLists = useRecoilValue(taskListsState)

  // fetchAllTaskLists({})
  return <PHome taskLists={taskLists} />
}
