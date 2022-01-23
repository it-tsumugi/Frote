import axios from 'axios'
import { impTaskListsType } from '../type/dataType'
import { impData } from '../constant/impData'

export const fetchImpTaskLists = async () => {
  let dbData: impTaskListsType = []

  try {
    const res = await axios.post('/api/read/imp-tasklists', {
      impData
    })
    dbData = res.data
  } catch (err) {
    console.log(err)
  }
  return dbData
}
