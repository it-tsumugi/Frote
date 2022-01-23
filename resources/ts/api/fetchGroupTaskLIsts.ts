import axios from 'axios'
import { groupTaskListsType } from '../type/dataType'

export const fetchGroupTaskLists = async () => {
  let dbData: groupTaskListsType = []

  try {
    const res = await axios.get('/api/read/group-tasklists')
    if (res.data.result) {
      dbData = res.data.data
    } else {
      //グループ自体が存在しない場合の処理
    }
  } catch (err) {
    console.log('useGetGroupTaskLists:エラー')
    console.log(err)
  }
  return dbData
}
