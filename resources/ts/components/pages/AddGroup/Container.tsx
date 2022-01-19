import { useEffect, useState, VFC } from 'react'
import { errorMessages } from '../../../constant/errorMessages'
import { useGetActions } from '../../../hooks/useGetActions'
import { PAddGroup } from './Presenter'

export const AddGroup: VFC = () => {
  const [group, setGroup] = useState('')
  const [groupError, setGroupError] = useState('')
  const { addGroup } = useGetActions()

  const validateLogin = () => {
    if (group.length === 0) setGroupError(errorMessages.group.blank)
    else if (group.length > 20) setGroupError(errorMessages.group.maxLength)
    else setGroupError('')
  }

  const checkIsSuccess = () => {
    if (groupError === '') return true
    else return false
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    addGroup({ group, checkIsSuccess, e })
  }

  useEffect(() => {
    validateLogin()
  }, [group])

  return <PAddGroup setGroup={setGroup} onSubmit={onSubmit} groupError={groupError} />
}
