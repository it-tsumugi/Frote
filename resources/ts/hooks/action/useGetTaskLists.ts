import { useSetRecoilState } from 'recoil'
import { booleanState, taskListsState } from '../../state/atom'
import { booleanStateKey } from '../../assets/data/stateKey'
import { fetchTaskLists } from '../../api/fetchTaskLists'

export const useGetTaskLists = () => {
  const setTaskLists = useSetRecoilState(taskListsState)
  const setIsGetGroupLists = useSetRecoilState(booleanState(booleanStateKey.isGetGroupLists))

  const getTaskLists = () => {
    const promise = fetchTaskLists()
    Promise.all([promise]).then(([taskLists]) => {
      setTaskLists(taskLists)
      setIsGetGroupLists(true)
    })
  }

  return { getTaskLists: () => getTaskLists() }
}
