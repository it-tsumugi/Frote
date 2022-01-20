import { useGetAllTaskLists } from './useGetAllTaskLists'
import { useGetGroupList } from './useGetGroupList'

export const useSetAllInitialData = () => {
  const { getAllTaskLists } = useGetAllTaskLists()
  const { getGroupList } = useGetGroupList()

  const setAllInitialData = () => {
    const promiseArray1 = getAllTaskLists()
    const promise1 = getGroupList()
    const promiseArray = [...promiseArray1, promise1]
    return promiseArray
  }

  return { setAllInitialData: setAllInitialData }
}
