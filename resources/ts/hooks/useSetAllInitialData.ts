import { useGetAllTaskLists } from './useGetAllTaskLists'

export const useSetAllInitialData = () => {
  const { getAllTaskLists } = useGetAllTaskLists()

  const setAllInitialData = () => {
    const promiseArray = getAllTaskLists()
    return promiseArray
  }

  return { setAllInitialData: setAllInitialData }
}
