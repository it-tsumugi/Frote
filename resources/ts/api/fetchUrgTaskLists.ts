import axios from 'axios'
import { urgTaskListsType } from '../type/dataType'
import { urgData } from '../constant/urgData'

export const fetchUrgTaskLists = async () => {
  let dbData: urgTaskListsType = []

  try {
    const res = await axios.post('/api/read/urg-tasklists', {
      urgData
    })
    dbData = res.data
  } catch (err) {
    window.alert('エラーが発生しました')
  }
  return dbData
}
