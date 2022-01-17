import { VFC } from 'react'
import { useRecoilValue } from 'recoil'
import { impTaskListsState } from '../../../../state/atom'
import { PImpDisplay } from './Presenter'

export const ImpDisplay: VFC = () => {
  const impTaskLists = useRecoilValue(impTaskListsState)

  return <PImpDisplay impTaskLists={impTaskLists} />
}
