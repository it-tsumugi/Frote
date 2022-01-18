import { VFC } from 'react'
import { useRecoilState } from 'recoil'
import { useGetUrg } from '../../../../hooks/useGetUrg'
import { numberState } from '../../../../state/atom'
import { numberStateKey } from '../../../../constant/stateKey'
import { PUrgSelect } from './Presenter'

type propsType = {
  task_list_id: number
}

export const UrgSelect: VFC<propsType> = ({ task_list_id }) => {
  const [urg, setUrg] = useRecoilState(numberState(numberStateKey.urg))
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => setUrg(Number(e.target.value))
  useGetUrg(task_list_id)

  return <PUrgSelect urg={urg} onChange={onChange} />
}
