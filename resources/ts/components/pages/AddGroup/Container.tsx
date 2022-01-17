import { useEffect, useState, VFC } from 'react'
import { NavButton } from '../../atoms/button/NavButton'
import { DefaultTextField } from '../../atoms/form/DefaultTextField'
import { FormCard } from '../../atoms/form/FormCard'
import { ActionButton } from '../../atoms/button/ActionButton'
import { path } from '../../../constant/path'
import { errorMessages } from '../../../constant/errorMessages'
import { SActionText } from '../../atoms/style/TextStyle'
import { useGetActions } from '../../../hooks/useGetActions'

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

  return (
    <>
      <SActionText>追加するグループを入力してください</SActionText>
      <FormCard>
        <form onSubmit={onSubmit}>
          <DefaultTextField
            name="group"
            label="グループ名"
            type="text"
            error={Boolean(groupError)}
            helperText={groupError}
            onChange={(e) => setGroup(e.target.value)}
          />
          <ActionButton type="submit">追加</ActionButton>
        </form>
      </FormCard>
      <NavButton to={path.group}>グループの一覧へ</NavButton>
    </>
  )
}
