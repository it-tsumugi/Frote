import { VFC } from 'react'
import { groupTaskListsState } from '../../../state/atom'
import { PGroupDisplay } from './Presenter'
import { useRecoilValue } from 'recoil'

export const GroupDisplay: VFC = () => {
  const groupTaskLists = useRecoilValue(groupTaskListsState)

  return <PGroupDisplay groupTaskLists={groupTaskLists} />
}
