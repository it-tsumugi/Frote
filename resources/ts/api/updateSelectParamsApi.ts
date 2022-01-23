import axios from 'axios'
import { updateSelectParamsApiPropsType } from '../type/action/updataSelectParamsType'
import { path } from '../constant/path'

export const updateSelectParamsApi = async (props: updateSelectParamsApiPropsType) => {
  const { task_list_id, group, imp, urg, history, getAllTaskLists } = props

  try {
    const res = await axios.put('/api/put/select-params', {
      task_list_id,
      group,
      imp,
      urg
    })
    await getAllTaskLists()
    window.alert('リストを更新しました')
    history.push(path.home)
  } catch (err) {
    console.log(err)
  }
}
