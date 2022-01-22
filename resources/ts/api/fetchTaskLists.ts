import { taskListType } from '../type/dataType'
import axios from 'axios'
import { fetchAllTaskLists } from './fetchAllTaskLists'

export const fetchTaskLists = async () => {
  let dbData: taskListType[] = []
  try {
    const res = await axios.get('/api/read/tasklists')
    console.log('useGetTaskLists:データ取得に成功しました')
    dbData = res.data.data
    // console.log(res)
    // await fetchAllTaskLists
  } catch (err) {
    console.log(err)
  }
  return dbData
}
