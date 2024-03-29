import axios from 'axios'
import { taskType } from '../type/dataType'

export type propsType = {
  task: taskType
  task_list_id: number
  getAllTaskLists: () => void
}

export const deleteTaskApi = async (props: propsType) => {
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
      await getAllTaskLists()
    } else {
      window.alert('タスクの削除に失敗しました')
    }
  } catch (err) {
    console.log(err)
  }
}
