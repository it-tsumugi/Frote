import { VFC } from 'react'
import { useRecoilValue } from 'recoil'
import { booleanState, groupListsState } from '../../../../state/atom'
import { booleanStateKey } from '../../../../constant/stateKey'
import { PGroupList } from './Presenter'
import { useGetActions } from '../../../../hooks/useGetActions'

export const GroupList: VFC = () => {
  const groupLists = useRecoilValue(groupListsState)
  const isGroupTaskLists = useRecoilValue(booleanState(booleanStateKey.isGetGroupLists))
  const { deleteGroup } = useGetActions()

  return <PGroupList groupLists={groupLists} isGroupTaskLists={isGroupTaskLists} deleteGroup={deleteGroup} />
}
