import axios from 'axios'
import { selectParamsType } from '../type/dataType'

type propsType = {
  task_list_id: number
}

export const fetchSelectParamsApi = async (props: propsType) => {
  const { task_list_id } = props
  let dbData: selectParamsType = {} as selectParamsType

  try {
    const res = await axios.get('/api/read/select-params', {
      params: {
        id: task_list_id
      }
    })
    dbData = res.data
  } catch (err) {
    console.log(err)
  }
  return dbData
}
