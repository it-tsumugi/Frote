import { groupTaskListsState } from '../state/atom'
import { useSetRecoilState } from 'recoil'
import { fetchGroupTaskLists } from '../api/fetchGroupTaskLIsts'

export const useGetGroupTaskLists = () => {
  const setGroupTaskLists = useSetRecoilState(groupTaskListsState)

  const getGroupTaskLists = async () => {
    const taskLists = await fetchGroupTaskLists()
    setGroupTaskLists(taskLists)
  }

  return { getGroupTaskLists: () => getGroupTaskLists() }
}
