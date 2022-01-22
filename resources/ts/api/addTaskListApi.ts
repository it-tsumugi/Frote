import axios from 'axios'
import { tasksType } from '../type/action/addTasksType'
import * as H from 'history'

type propsType = {
  tasks: tasksType
  imp: number
  urg: number
  group: string
  history: H.History
  getAllTaskLists: () => Promise<void>
}

export const addTaskListApi = async (props: propsType) => {
  const { tasks, imp, urg, group, getAllTaskLists, history } = props
  try {
    const res = await axios.post('/api/add/tasklist', {
      tasks,
      imp,
      urg,
      group
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
