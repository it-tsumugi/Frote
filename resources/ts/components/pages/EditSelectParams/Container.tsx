import { VFC } from 'react'
import { useParams } from 'react-router'
import { useRecoilValue } from 'recoil'
import { numberState, stringState } from '../../../state/atom'
import { numberStateKey, stringStateKey } from '../../../constant/stateKey'
import { useUpdateSelectParams } from '../../../hooks/useUpdateSelectParams'
import { PEditSelectParams } from './Presenter'

export const EditSelectParams: VFC = () => {
  const { id } = useParams<{ id: string }>()
  const task_list_id = Number(id)
  const imp = useRecoilValue(numberState(numberStateKey.imp))
  const urg = useRecoilValue(numberState(numberStateKey.urg))
  const group = useRecoilValue(stringState(stringStateKey.group))
  const { updateSelectParams } = useUpdateSelectParams()
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => updateSelectParams({ e, imp, urg, group, task_list_id })

  return <PEditSelectParams onSubmit={onSubmit} task_list_id={task_list_id} />
}
