import { impTaskListsState } from '../../state/atom'
import { useSetRecoilState } from 'recoil'
import { fetchImpTaskLists } from '../../api/fetchImpTaskLists'

export const useGetImpTaskLists = () => {
  const setImpTaskLists = useSetRecoilState(impTaskListsState)

  const getImpTaskLists = () => {
    const promise = fetchImpTaskLists()
    Promise.all([promise]).then(([taskLists]) => {
      setImpTaskLists(taskLists)
    })
  }
  return { getImpTaskLists: () => getImpTaskLists() }
}
