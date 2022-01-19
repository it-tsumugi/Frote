import { useSetRecoilState } from 'recoil'
import { fetchGroupList } from '../api/fetchGroupList'
import { booleanStateKey, stringStateKey } from '../constant/stateKey'
import { booleanState, groupListsState, stringState } from '../state/atom'

export const useGetGroupList = () => {
  const setIsGetGroupLists = useSetRecoilState(booleanState(booleanStateKey.isGetGroupLists))
  const setGroup = useSetRecoilState(stringState(stringStateKey.group))
  const setGroupList = useSetRecoilState(groupListsState)

  const getGroupList = async () => {
    await fetchGroupList({ setGroup, setGroupList })
    setIsGetGroupLists(true)
  }

  return { getGroupList: getGroupList }
}
