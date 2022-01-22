import { useGetAllTaskLists } from './useGetAllTaskLists'
import { useGetGroupList } from './useGetGroupList'

export const useSetAllInitialData = () => {
  const { getAllTaskLists } = useGetAllTaskLists()
  const { getGroupList } = useGetGroupList()

  const setAllInitialData = () => {
    const promise1 = getGroupList()
    const promise2 = getAllTaskLists()
    const promiseArray = [promise1, promise2]
    return promiseArray
  }

  return { setAllInitialData: setAllInitialData }
}
