import { taskListType } from '../type/dataType'
import axios from 'axios'
import { fetchAllTaskLists } from './fetchAllTaskLists'

export const fetchTaskLists = async () => {
  let dbData: taskListType[] = []
  try {
    const res = await axios.get('/api/read/tasklists')
    dbData = res.data.data
  } catch (err) {
    console.log(err)
  }
  return dbData
}
