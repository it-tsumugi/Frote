import { useGetAllTaskLists } from './useGetAllTaskLists'

export const useSetAllInitialData = () => {
  const { getAllTaskLists } = useGetAllTaskLists()

  const setAllInitialData = async () => {
    await getAllTaskLists()
  }

  return { setAllInitialData: setAllInitialData }
}
