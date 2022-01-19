import styled from 'styled-components'
import { VFC } from 'react'
import { GroupSelect } from '../../molecules/select/GroupSelect/Container'
import { ImpSelect } from '../../molecules/select/ImpSelect/Container'
import { UrgSelect } from '../../molecules/select/UrgSelect/Container'
import { SActionText } from '../../../styles/style/TextStyle'
import { FormCard } from '../../../styles/style/FormCard'
import { ActionButton } from '../../atoms/button/ActionButton'

type propsType = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  task_list_id: number
}

export const PEditSelectParams: VFC<propsType> = ({ onSubmit, task_list_id }) => {
  return (
    <>
      <SActionText>リストを編集してください</SActionText>
      <FormCard>
        <SForm onSubmit={onSubmit}>
          <ImpSelect task_list_id={task_list_id} />
          <UrgSelect task_list_id={task_list_id} />
          <GroupSelect task_list_id={task_list_id} />
          <ActionButton type="submit">更新</ActionButton>
        </SForm>
      </FormCard>
    </>
  )
}

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
