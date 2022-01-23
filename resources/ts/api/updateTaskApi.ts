import axios from 'axios'
import { path } from '../constant/path'
import { updateTaskApiPropsType } from '../type/action/updateTaskType'

export const updateTaskApi = async (props: updateTaskApiPropsType) => {
  const { task, task_id, history, getAllTaskLists } = props

  try {
    const res = await axios.put('/api/put/task', {
      task_id,
      task
    })
    await getAllTaskLists()
    window.alert('グループを更新しました')
    history.push({ pathname: path.home })
  } catch (err) {
    console.log(err)
  }
}
