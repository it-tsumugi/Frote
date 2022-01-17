import { impTaskListsState } from '../state/atom'
import { useSetRecoilState } from 'recoil'
import { fetchImpTaskLists } from '../api/fetchImpTaskLists'

export const useGetImpTaskLists = () => {
  const setImpTaskLists = useSetRecoilState(impTaskListsState)

  const getImpTaskLists = async () => {
    const taskLists = await fetchImpTaskLists()
    setImpTaskLists(taskLists)
  }

  return { getImpTaskLists: () => getImpTaskLists() }
}
