import { VFC } from 'react'
import { useRecoilValue } from 'recoil'
import { urgTaskListsState } from '../../../../state/atom'
import { PUrgDisplay } from './Presenter'

export const UrgDisplay: VFC = () => {
  const urgTaskLists = useRecoilValue(urgTaskListsState)

  return <PUrgDisplay urgTaskLists={urgTaskLists} />
}
