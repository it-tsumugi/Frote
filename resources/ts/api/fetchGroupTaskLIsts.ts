import axios from 'axios'
import { groupTaskListsType } from '../type/dataType'

export const fetchGroupTaskLists = async () => {
  let dbData: groupTaskListsType = [
    {
      taskLists: [],
      group: '',
      group_id: -1
    }
  ]
  try {
    const res = await axios.get('/api/read/group-tasklists')
    if (res.data.result) {
      console.log('useGetGroupTaskLists:データ取得に成功しました')
      dbData = res.data.data
    } else {
      console.log('useGetGroupTaskLists:グループは存在しません')
    }
  } catch (err) {
    console.log('useGetGroupTaskLists:エラー')
    console.log(err)
  }
  return dbData
}
