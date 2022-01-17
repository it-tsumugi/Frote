import { useSetRecoilState } from 'recoil'
import { booleanState, taskListsState } from '../state/atom'
import { booleanStateKey } from '../constant/stateKey'
import { fetchTaskLists } from '../api/fetchTaskLists'

export const useGetTaskLists = () => {
  const setTaskLists = useSetRecoilState(taskListsState)
  const setIsGetGroupLists = useSetRecoilState(booleanState(booleanStateKey.isGetGroupLists))

  const getTaskLists = async () => {
    const taskLists = await fetchTaskLists()
    setTaskLists(taskLists)
    setIsGetGroupLists(true)
  }

  return { getTaskLists: () => getTaskLists() }
}
