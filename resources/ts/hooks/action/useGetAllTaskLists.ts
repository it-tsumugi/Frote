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
    getTaskLists()
    getUrgTaskLists()
    getImpTaskLists()
    getGroupTaskLists()
  }

  return { getAllTaskLists: () => getAllTaskLists() }
}
