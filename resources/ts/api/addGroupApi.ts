import axios from 'axios'
import { path } from '../constant/path'
import * as H from 'history'

type addGroupApiPropsType = {
  group: string
  history: H.History
  getGroupList: () => Promise<void>
  getGroupTaskLists: () => Promise<void>
}

export const addGroupApi = async (props: addGroupApiPropsType) => {
  const { group, history, getGroupList, getGroupTaskLists } = props
  try {
    const res = await axios.post('/api/add/group', {
      group
    })
    if (res.data.result) {
      window.alert('グループを追加しました')
      const promise1 = getGroupList()
      const promise2 = getGroupTaskLists()
      Promise.all([promise1, promise2]).then(() => {
        history.push(path.group)
      })
    } else {
      window.alert('既に同名のグループが存在します')
    }
  } catch (err) {
    console.log(err)
  }
}
