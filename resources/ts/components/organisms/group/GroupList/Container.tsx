import { VFC } from 'react'
import { useRecoilValue } from 'recoil'
import { groupListsState } from '../../../../state/atom'
import { PGroupList } from './Presenter'
import { useGetActions } from '../../../../hooks/useGetActions'
import { useHistory } from 'react-router'

export const GroupList: VFC = () => {
  const groupLists = useRecoilValue(groupListsState)
  const { deleteGroup, getGroup } = useGetActions()
  const history = useHistory()

  return <PGroupList groupLists={groupLists} deleteGroup={deleteGroup} getGroup={getGroup} history={history} />
}
