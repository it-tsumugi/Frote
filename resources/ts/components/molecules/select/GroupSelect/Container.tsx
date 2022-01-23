import { VFC } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useGetGroup } from '../../../../hooks/useGetGroup'
import { groupListsState, stringState } from '../../../../state/atom'
import { stringStateKey } from '../../../../constant/stateKey'
import { PGroupSelect } from './Presenter'

type propsType = {
  task_list_id: number
}

export const GroupSelect: VFC<propsType> = ({ task_list_id }) => {
  const [group, setGroup] = useRecoilState(stringState(stringStateKey.group))
  const groupLists = useRecoilValue(groupListsState)
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => setGroup(String(e.target.value))

  // useGetGroup({ id: task_list_id, key: 'task_list' })

  return <PGroupSelect group={group} groupLists={groupLists} onChange={onChange} />
}
