import axios from 'axios'
import { addTasksApiPropsType } from '../type/action/addTasksType'

export const addTasksApi = async (props: addTasksApiPropsType) => {
  const { task_list_id, tasks, history, setIsComplete, getAllTaskLists } = props

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
      setIsComplete(false)
    }
  } catch (err) {
    console.log(err)
  }
}
