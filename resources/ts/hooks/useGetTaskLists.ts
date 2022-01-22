import { useSetRecoilState } from 'recoil'
import { booleanState, taskListsState } from '../state/atom'
import { booleanStateKey } from '../constant/stateKey'
import { fetchTaskLists } from '../api/fetchTaskLists'

export const useGetTaskLists = () => {
  const setTaskLists = useSetRecoilState(taskListsState)
  const setIsGetGroupLists = useSetRecoilState(booleanState(booleanStateKey.isGetGroupLists))
  const setIsLoading = useSetRecoilState(booleanState(booleanStateKey.isLoading))

  const getTaskLists = async () => {
    setIsLoading(true)
    const taskLists = await fetchTaskLists()
    setTaskLists(taskLists)
    setIsLoading(false)
    setIsGetGroupLists(true)
  }

  return { getTaskLists: () => getTaskLists() }
}
