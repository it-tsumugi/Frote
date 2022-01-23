import { useGetGroupList } from './useGetGroupList'
import { deleteGroupApi } from '../api/deleteGroupApi'
import { useGetGroupTaskLists } from './useGetGroupTaskLists'

export const useDeleteGroup = () => {
  const { getGroupList } = useGetGroupList()
  const { getGroupTaskLists } = useGetGroupTaskLists()

  const deleteGroup = async (id: number) => {
    await deleteGroupApi({ id, getGroupList, getGroupTaskLists })
  }

  return { deleteGroup: deleteGroup }
}
