import { useEffect, useState, VFC } from 'react'
import { useParams } from 'react-router'
import { useRecoilState } from 'recoil'
import { stringState } from '../../../state/atom'
import { errorMessages } from '../../../constant/errorMessages'
import { stringStateKey } from '../../../constant/stateKey'
import { useGetActions } from '../../../hooks/useGetActions'
import { PEditGroup } from './Presenter'

export const EditGroup: VFC = () => {
  const { id } = useParams<{ id: string }>()
  const group_id = Number(id)
  const [group, setGroup] = useRecoilState(stringState(stringStateKey.group))
  const [groupError, setGroupError] = useState('')
  const { updateGroup } = useGetActions()

  const validateLogin = () => {
    if (group.length === 0) setGroupError(errorMessages.group.blank)
    else if (group.length > 20) setGroupError(errorMessages.group.maxLength)
    else setGroupError('')
  }

  const checkIsSuccess = () => {
    if (groupError === '') return true
    else return false
  }

  useEffect(() => {
    validateLogin()
  }, [group])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => updateGroup({ e, id: group_id, group, checkIsSuccess })

  return <PEditGroup onSubmit={onSubmit} group={group} groupError={groupError} setGroup={setGroup} />
}
