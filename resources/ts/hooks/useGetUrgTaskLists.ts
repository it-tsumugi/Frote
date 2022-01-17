import { urgTaskListsState } from '../state/atom'
import { useSetRecoilState } from 'recoil'
import { fetchUrgTaskLists } from '../api/fetchUrgTaskLists'

export const useGetUrgTaskLists = () => {
  const setUrgTaskLists = useSetRecoilState(urgTaskListsState)

  const getUrgTaskLists = async () => {
    const taskLists = await fetchUrgTaskLists()
    setUrgTaskLists(taskLists)
  }

  return { getUrgTaskLists: () => getUrgTaskLists() }
}
