import { useGetAllTaskLists } from './useGetAllTaskLists'
import { useGetGroupList } from './useGetGroupList'
import { useGetAllTaskLists2 } from './useGetAllTasklists2'

export const useSetAllInitialData = () => {
  const { getAllTaskLists } = useGetAllTaskLists()
  const { getAllTasklists2 } = useGetAllTaskLists2()
  const { getGroupList } = useGetGroupList()

  const setAllInitialData = () => {
    // const promiseArray1 = getAllTaskLists()
    const promise1 = getGroupList()
    // const promiseArray = [...promiseArray1, promise1]
    const promise2 = getAllTasklists2()
    const promiseArray = [promise1, promise2]
    return promiseArray
  }

  return { setAllInitialData: setAllInitialData }
}
