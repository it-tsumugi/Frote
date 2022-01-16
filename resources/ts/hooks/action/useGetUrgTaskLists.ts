import { urgTaskListsState } from '../../state/atom'
import { useSetRecoilState } from 'recoil'
import { fetchUrgTaskLists } from '../../api/fetchUrgTaskLists'

export const useGetUrgTaskLists = () => {
  const setUrgTaskLists = useSetRecoilState(urgTaskListsState)
  const getUrgTaskLists = () => {
    const promise = fetchUrgTaskLists()
    Promise.all([promise]).then(([taskLists]) => {
      setUrgTaskLists(taskLists)
    })
  }
  return { getUrgTaskLists: () => getUrgTaskLists() }
}
