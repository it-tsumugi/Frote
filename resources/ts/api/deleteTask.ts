import axios from 'axios'
import { taskType } from '../assets/type/dataType'

export type propsType = {
  task: taskType
  task_list_id: number
  getAllTaskLists: () => void
}

export const deleteTask = async (props: propsType) => {
  const { task, task_list_id, getAllTaskLists } = props
  const order: number = task.order
  try {
    const res = await axios.delete('/api/delete/task', {
      data: {
        task_id: task.task_id,
        task_list_id: task_list_id,
        order: order
      }
    })
    if (res.data.result) {
      console.log('deleteTask:タスクの削除に成功しました')
    } else {
      console.log('deleteTask:タスクの削除に失敗しました')
    }
    await getAllTaskLists()
  } catch (err) {
    console.log(err)
  }
}
