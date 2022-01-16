import { useGetTaskLists } from './useGetTaskLists'
import { useGetImpTaskLists } from './useGetImpTaskLists'
import { useGetUrgTaskLists } from './useGetUrgTaskLists'
import { useGetGroupTaskLists } from './useGetGroupTaskLists'
import { useGetAllTaskLists } from './useGetAllTaskLists'

export const useGetActions = () => {
  const { getTaskLists } = useGetTaskLists()
  const { getImpTaskLists } = useGetImpTaskLists()
  const { getUrgTaskLists } = useGetUrgTaskLists()
  const { getGroupTaskLists } = useGetGroupTaskLists()
  const { getAllTaskLists } = useGetAllTaskLists()

  return { getTaskLists, getImpTaskLists, getUrgTaskLists, getGroupTaskLists, getAllTaskLists }
}
