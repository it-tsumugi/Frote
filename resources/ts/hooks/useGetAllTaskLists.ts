import { useGetUrgTaskLists } from './useGetUrgTaskLists'
import { useGetImpTaskLists } from './useGetImpTaskLists'
import { useGetGroupTaskLists } from './useGetGroupTaskLists'
import { useGetTaskLists } from './useGetTaskLists'

export const useGetAllTaskLists = () => {
  const { getUrgTaskLists } = useGetUrgTaskLists()
  const { getImpTaskLists } = useGetImpTaskLists()
  const { getGroupTaskLists } = useGetGroupTaskLists()
  const { getTaskLists } = useGetTaskLists()

  const getAllTaskLists = () => {
    const promise1 = getTaskLists()
    const promise2 = getUrgTaskLists()
    const promise3 = getImpTaskLists()
    const promise4 = getGroupTaskLists()
    const promiseArray = [promise1, promise2, promise3, promise4]

    return promiseArray
  }

  return { getAllTaskLists: () => getAllTaskLists() }
}
