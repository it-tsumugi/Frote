import { VFC } from 'react'
import { NavButton } from '../../../styles/commonStyles/NavButton'
import { DefaultTextField } from '../../atoms/form/DefaultTextField'
import { FormCard } from '../../../styles/commonStyles/FormCard'
import { ActionButton } from '../../atoms/button/ActionButton'
import { path } from '../../../constant/path'
import { SActionText } from '../../../styles/commonStyles/TextStyle'

type propsType = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  groupError: string
  setGroup: React.Dispatch<React.SetStateAction<string>>
}

export const PAddGroup: VFC<propsType> = ({ onSubmit, groupError, setGroup }) => {
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
