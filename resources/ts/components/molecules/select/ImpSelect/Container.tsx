import { VFC } from 'react'
import { useRecoilState } from 'recoil'
import { useGetImp } from '../../../../hooks/useGetImp'
import { numberState } from '../../../../state/atom'
import { numberStateKey } from '../../../../constant/stateKey'
import { PImpSelect } from './Presenter'

type propsType = {
  task_list_id: number
}

export const ImpSelect: VFC<propsType> = (props) => {
  const { task_list_id } = props
  const [imp, setImp] = useRecoilState(numberState(numberStateKey.imp))
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => setImp(Number(e.target.value))
  useGetImp(task_list_id)

  return <PImpSelect imp={imp} onChange={onChange} />
}
