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
      console.log('InsertTask:タスクの挿入に成功')
      const promiseArray = getAllTaskLists()
      Promise.all([promiseArray]).then(() => {
        window.alert('タスクを挿入しました')
        history.push(path.home)
      })
    } else {
      console.log('InsertTask:エラー')
    }
  } catch (err) {
    console.log('InsertTask:エラー')
    console.log(err)
  }
}
