import { VFC } from 'react'
import { taskListsState } from '../../../state/atom'
import { useRecoilValue } from 'recoil'
import { PHome } from './Presenter'

export const Home: VFC = () => {
  const taskLists = useRecoilValue(taskListsState)

  return <PHome taskLists={taskLists} />
}
