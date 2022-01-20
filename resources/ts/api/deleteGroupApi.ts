import axios from 'axios'

type propsType = {
  id: number
  getGroupList: () => Promise<void>
}

export const deleteGroupApi = async (props: propsType) => {
  const { id, getGroupList } = props

  try {
    const res = await axios.delete('/api/delete/group', {
      data: { id: id }
    })
    if (!res.data.result) {
      window.alert('そのグループを使用しているリストがあるため削除出来ません')
    }
    await getGroupList()
  } catch (err) {
    console.log(err)
    window.alert('エラーが発生しました')
  }
}