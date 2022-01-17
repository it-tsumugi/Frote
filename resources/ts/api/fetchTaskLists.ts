import { taskListType } from '../type/dataType'
import axios from 'axios'

export const fetchTaskLists = async () => {
  let dbData: taskListType[] = []
  try {
    const res = await axios.get('/api/read/tasklists')
    console.log('useGetTaskLists:データ取得に成功しました')
    dbData = res.data.data
  } catch (err) {
    console.log('useGetTaskLists:エラー')
    console.log(err)
  }
  return dbData
}
