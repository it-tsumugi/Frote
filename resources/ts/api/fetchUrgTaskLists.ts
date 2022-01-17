import axios from 'axios'
import { urgTaskListsType } from '../type/dataType'
import { urgData } from '../constant/urgData'

export const fetchUrgTaskLists = async () => {
  let dbData: urgTaskListsType = [
    {
      taskLists: [],
      text: '',
      id: 0
    }
  ]
  try {
    const res = await axios.post('/api/read/urg-tasklists', {
      urgData
    })
    console.log('useGetUrgTaskLists:データ取得に成功しました')
    dbData = res.data
  } catch (err) {
    console.log('useGetUrgTaskLists:エラー')
  }
  return dbData
}
