import axios from 'axios'

type propsType = {
  task_list_id: number
  getAllTaskLists: () => void
}

export const deleteTaskListApi = async (props: propsType) => {
  const { task_list_id, getAllTaskLists } = props

  try {
    const res = await axios.delete('/api/delete/tasklist', {
      data: { task_list_id: task_list_id }
    })
    if (res.data.result) {
      await getAllTaskLists()
    } else {
      window.alert('リストの削除に失敗しました')
    }
  } catch (err) {
    console.log(err)
  }
}
