import { VFC } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useGetGroup } from '../../../../hooks/useGetGroup'
import { booleanState, groupListsState, stringState } from '../../../../state/atom'
import { booleanStateKey, stringStateKey } from '../../../../constant/stateKey'
import { PGroupSelect } from './Presenter'

type propsType = {
  task_list_id: number
}

export const GroupSelect: VFC<propsType> = ({ task_list_id }) => {
  const isComplete = useRecoilValue(booleanState(booleanStateKey.isGetGroupLists))
  const [group, setGroup] = useRecoilState(stringState(stringStateKey.group))
  const groupLists = useRecoilValue(groupListsState)
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => setGroup(String(e.target.value))

  useGetGroup(task_list_id, 'task_list')

  return <PGroupSelect isComplete={isComplete} group={group} groupLists={groupLists} onChange={onChange} />
}
