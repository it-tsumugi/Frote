import axios from 'axios'
import { addGroupApiPropsType } from '../type/action/addGroup'
import { path } from '../constant/path'

export const addGroupApi = async (props: addGroupApiPropsType) => {
  const { group, history } = props
  try {
    const res = await axios.post('/api/add/group', {
      group
    })
    if (res.data.result) {
      console.log('AddGroup:グループの追加に成功')
      window.alert('グループを追加しました')
      history.push(path.group)
    } else {
      console.log('AddGroup:グループの追加に失敗')
      window.alert('既に同名のグループが存在します')
    }
  } catch (err) {
    console.log('AddGroup:エラー')
    console.log(err)
  }
}
