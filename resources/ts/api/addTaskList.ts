import axios from 'axios'
import { SubmitHandler } from 'react-hook-form'
import { addTaskListDataType } from '../type/action/addTaskListType'

export const addTaskList: SubmitHandler<addTaskListDataType> = async ({
  e,
  data,
  isComplete,
  group,
  imp,
  urg,
  history,
  getAllTaskLists
}) => {
  const tasks = data.tasks
  e?.preventDefault()
  if (isComplete) {
    if (group !== '') {
      try {
        const res = await axios.post('/api/add/tasklist', {
          tasks,
          imp,
          urg,
          group
        })
        if (res.data.result) {
          console.log('addTaskList:タスクの追加に成功')
          getAllTaskLists()
          window.alert('タスクを追加しました')
          history.push({ pathname: '/home' })
        } else {
          window.alert('すべてのタスクは１文字以上３０文字以下である必要があります')
          console.log('addTaskList:タスクの追加に失敗')
        }
      } catch (err) {
        console.log('addTaskList:エラー')
        console.log(err)
      }
    } else {
      window.alert('グループを追加してください')
    }
  }
}
