import axios from 'axios'
import { path } from '../constant/path'
import { toggleIsWaitApiPropsType } from '../type/action/toggleIsWaitType'

export const toggleIsWaitApi = async (props: toggleIsWaitApiPropsType) => {
  const { task_list_id, history, getAllTaskLists } = props

  try {
    const res = await axios.put('/api/put/toggle-is-wait', {
      task_list_id: task_list_id
    })
    console.log(res)
    await getAllTaskLists()
    history.push({ pathname: path.home })
  } catch (err) {
    console.log(err)
  }
}
