import { useSetRecoilState } from 'recoil'
import { stringStateKey } from '../constant/stateKey'
import { stringState } from '../state/atom'
import { fetchGroupApi } from '../api/fetchGroupApi'

export const useGetGroup = () => {
  const setGroup = useSetRecoilState(stringState(stringStateKey.group))

  const getGroup = async (props: getGroupPropsType) => {
    const { id, key } = props
    await fetchGroupApi({ setGroup, id, key })
  }

  return { getGroup: getGroup }
}
