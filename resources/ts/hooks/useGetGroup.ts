import { useSetRecoilState } from 'recoil'
import { stringStateKey } from '../constant/stateKey'
import { stringState } from '../state/atom'
import { fetchGroupApi } from '../api/fetchGroupApi'

type propsType = {
  id: number
  key: 'group' | 'task_list'
}

export const useGetGroup = () => {
  const setGroup = useSetRecoilState(stringState(stringStateKey.group))

  const getGroup = async (props: propsType) => {
    const { id, key } = props
    await fetchGroupApi({ setGroup, id, key })
  }

  return { getGroup: getGroup }
}
