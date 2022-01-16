import { groupTaskListsState } from '../../state/atom'
import { useSetRecoilState } from 'recoil'
import { fetchGroupTaskLists } from '../../api/fetchGroupTaskLIsts'

export const useGetGroupTaskLists = () => {
  const setGroupTaskLists = useSetRecoilState(groupTaskListsState)
  const getGroupTaskLists = () => {
    const promise = fetchGroupTaskLists()
    Promise.all([promise]).then(([taskLists]) => {
      setGroupTaskLists(taskLists)
    })
  }

  return { getGroupTaskLists: () => getGroupTaskLists() }
}
