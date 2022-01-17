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
    if (res.data.result) {
      console.log('updateSelectParams:セレクトパラメータの更新に成功')
      const promiseArray = getAllTaskLists()
      Promise.all(promiseArray).then(() => {
        window.alert('リストを更新しました')
        history.push(path.home)
      })
    } else {
      window.alert('更新に失敗しました')
    }
  } catch (err) {
    console.log(err)
  }
}
