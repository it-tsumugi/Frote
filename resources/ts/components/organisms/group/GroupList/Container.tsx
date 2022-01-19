import { VFC } from 'react'
import { useRecoilValue } from 'recoil'
import { useGetGroupLists } from '../../../../hooks/useGetGroupLists'
import { booleanState, groupListsState } from '../../../../state/atom'
import { booleanStateKey } from '../../../../constant/stateKey'
import { PGroupList } from './Presenter'
import { useGetActions } from '../../../../hooks/useGetActions'

export const GroupList: VFC = () => {
  const groupLists = useRecoilValue(groupListsState)
  const isGroupTaskLists = useRecoilValue(booleanState(booleanStateKey.isGetGroupLists))
  const { deleteGroup } = useGetActions()
  useGetGroupLists()

  return <PGroupList groupLists={groupLists} isGroupTaskLists={isGroupTaskLists} deleteGroup={deleteGroup} />
}
