import axios from 'axios'

type propsType = {
  id: number
  getGroupList: () => Promise<void>
  getGroupTaskLists: () => Promise<void>
}

export const deleteGroupApi = async (props: propsType) => {
  const { id, getGroupList, getGroupTaskLists } = props
  try {
    const res = await axios.delete('/api/delete/group', {
      data: { id: id }
    })
    if (res.data.result) {
      const promise1 = getGroupList()
      const promise2 = getGroupTaskLists()
      Promise.all([promise1, promise2])
    } else {
      window.alert('そのグループを使用しているリストがあるため削除出来ません')
    }
  } catch (err) {
    console.log(err)
  }
}
