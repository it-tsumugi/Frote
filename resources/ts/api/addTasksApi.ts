import axios from 'axios'
import { tasksType } from '../type/action/addTasksType'
import * as H from 'history'

type addTasksApiPropsType = {
  task_list_id: number
  tasks: tasksType
  history: H.History
  getAllTaskLists: () => Promise<void>
}

export const addTasksApi = async (props: addTasksApiPropsType) => {
  const { task_list_id, tasks, history, getAllTaskLists } = props

  try {
    const res = await axios.post('/api/add/tasks', {
      task_list_id,
      tasks
    })
    if (res.data.result) {
      await getAllTaskLists()
      window.alert('タスクを追加しました')
      history.push({ pathname: '/home' })
    } else {
      window.alert('すべてのタスクは１文字以上３０文字以下である必要があります')
    }
  } catch (err) {
    console.log(err)
  }
}
