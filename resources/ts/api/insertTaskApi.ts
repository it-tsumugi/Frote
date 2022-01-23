import axios from 'axios'
import { insertTaskApiPropsType } from '../type/action/insertTaskType'
import { path } from '../constant/path'

export const insertTaskApi = async (props: insertTaskApiPropsType) => {
  const { task, task_id, history, getAllTaskLists } = props

  try {
    const res = await axios.post('/api/insert/task', {
      task_id,
      task
    })
    if (res.data.result) {
      await getAllTaskLists()
      window.alert('タスクを挿入しました')
      history.push(path.home)
    } else {
      window.alert('エラーが発生しました')
    }
  } catch (err) {
    console.log(err)
  }
}
