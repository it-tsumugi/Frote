import { useGetGroupList } from './useGetGroupList'
import { deleteGroupApi } from '../api/deleteGroupApi'

export const useDeleteGroup = () => {
  const { getGroupList } = useGetGroupList()

  const deleteGroup = async (id: number) => {
    await deleteGroupApi({ id, getGroupList })
  }

  return { deleteGroup: deleteGroup }
}
