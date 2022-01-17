import axios from 'axios'
import { updateGroupApiPropsType } from '../type/action/updateGroupType'

export const updateGroupApi = async (props: updateGroupApiPropsType) => {
  const { id, group, history } = props

  try {
    const res = await axios.put('/api/put/group', {
      id,
      group
    })
    if (res.data.result) {
      console.log('updateGroup:グループの更新に成功')
      window.alert('グループを更新しました')
      history.push({ pathname: '/group' })
    } else {
      console.log('updateGroup:グループの追加に失敗')
      window.alert('同名のグループが既に存在します')
    }
  } catch (err) {
    console.log('updateGroup:接続に失敗')
    console.log(err)
  }
}
