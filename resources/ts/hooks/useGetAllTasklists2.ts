import { fetchAllTaskLists } from '../api/fetchAllTaskLists'
import { useSetRecoilState } from 'recoil'
import { taskListsState, impTaskListsState, urgTaskListsState, groupTaskListsState } from '../state/atom'

export const useGetAllTaskLists2 = () => {
  const setTaskLists = useSetRecoilState(taskListsState)
  const setImpTaskLists = useSetRecoilState(impTaskListsState)
  const setUrgTaskLists = useSetRecoilState(urgTaskListsState)
  const setGroupTaskLists = useSetRecoilState(groupTaskListsState)

  const getAllTasklists2 = async () => {
    const data = await fetchAllTaskLists({})
    setTaskLists(data.taskLists)
    setImpTaskLists(data.impTaskLists)
    setGroupTaskLists(data.groupTaskLists)
    setUrgTaskLists(data.urgTaskLists)
  }
  return { getAllTasklists2: getAllTasklists2 }
}
