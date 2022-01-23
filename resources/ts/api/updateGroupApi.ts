import axios from 'axios'
import * as H from 'history'

type updateGroupApiPropsType = {
  id: number
  group: string
  history: H.History
  getGroupList: () => Promise<void>
}

export const updateGroupApi = async (props: updateGroupApiPropsType) => {
  const { id, group, history, getGroupList } = props

  try {
    const res = await axios.put('/api/put/group', {
      id,
      group
    })
    if (res.data.result) {
      window.alert('グループを更新しました')
      await getGroupList()
      history.push({ pathname: '/group' })
    } else {
      window.alert('同名のグループが既に存在します')
    }
  } catch (err) {
    console.log(err)
  }
}
