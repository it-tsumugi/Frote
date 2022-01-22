import axios from 'axios'

type propsType = {
  task_list_id: number
  getAllTaskLists: () => void
}

export const deleteTaskList = async (props: propsType) => {
  const { task_list_id, getAllTaskLists } = props

  try {
    const res = await axios.delete('/api/delete/tasklist', {
      data: { task_list_id: task_list_id }
    })
    if (res.data.result) {
      console.log('deleteTaskList:タスクの削除に成功しました')
    }
    await getAllTaskLists()
  } catch (err) {
    console.log(err)
  }
}
