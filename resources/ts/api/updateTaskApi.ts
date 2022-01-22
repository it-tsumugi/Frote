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
    if (res.data.result) {
      await getAllTaskLists()
      window.alert('グループを更新しました')
      history.push({ pathname: path.home })
    } else {
      console.log('updateTask:タスクの追加に失敗')
    }
  } catch (err) {
    console.log('updateTask:接続に失敗')
    console.log(err)
  }
}
