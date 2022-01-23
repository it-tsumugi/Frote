import { useSetRecoilState } from 'recoil'
import { numberState, stringState } from './../state/atom'
import { numberStateKey, stringStateKey } from '../constant/stateKey'
import { fetchSelectParamsApi } from '../api/fetchSelectParamsApi'

type propsType = {
  task_list_id: number
}

export const useGetSelectParams = () => {
  const setGroup = useSetRecoilState(stringState(stringStateKey.group))
  const setImp = useSetRecoilState(numberState(numberStateKey.imp))
  const setUrg = useSetRecoilState(numberState(numberStateKey.urg))

  const getSelectParams = async (props: propsType) => {
    const { task_list_id } = props
    const dbData = await fetchSelectParamsApi({ task_list_id })
    setGroup(dbData.group)
    setImp(dbData.imp)
    setUrg(dbData.urg)
  }

  return { getSelectParams: getSelectParams }
}
