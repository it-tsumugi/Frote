import { useSetRecoilState } from 'recoil'
import { stringStateKey } from '../constant/stateKey'
import { stringState } from '../state/atom'
import { fetchTaskApi } from '../api/fetchTaskApi'

type propsType = {
  task_id: number
}
export const useGetTask = () => {
  const setTask = useSetRecoilState(stringState(stringStateKey.task))

  const getTask = async (props: propsType) => {
    const { task_id } = props
    await fetchTaskApi({ task_id, setTask })
  }
  return { getTask: getTask }
}
