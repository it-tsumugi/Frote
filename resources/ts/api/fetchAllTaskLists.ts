import axios from 'axios'
import { allTaskListsType } from '../type/dataType'
import { impData } from '../constant/impData'
import { urgData } from '../constant/urgData'

export const fetchAllTaskLists = async () => {
  let dbData: allTaskListsType = {
    groupTaskLists: [],
    impTaskLists: [],
    urgTaskLists: [],
    taskLists: []
  }

  try {
    const res = await axios.post('/api/read/all-tasklists', {
      impData,
      urgData
    })
    console.log('fetchAllTaskLists:データ取得に成功しました')
    dbData = res.data
  } catch (err) {
    console.log(err)
  }
  return dbData
}
