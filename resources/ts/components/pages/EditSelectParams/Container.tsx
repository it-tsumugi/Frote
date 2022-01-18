import styled from 'styled-components'
import { VFC } from 'react'
import { useParams } from 'react-router'
import { useRecoilValue } from 'recoil'
import { GroupSelect } from '../../molecules/select/GroupSelect/Container'
import { ImpSelect } from '../../molecules/select/ImpSelect/Container'
import { UrgSelect } from '../../molecules/select/UrgSelect/Container'
import { SActionText } from '../../atoms/style/TextStyle'
import { FormCard } from '../../atoms/form/FormCard'
import { ActionButton } from '../../atoms/button/ActionButton'
import { numberState, stringState } from '../../../state/atom'
import { numberStateKey, stringStateKey } from '../../../constant/stateKey'
import { useUpdateSelectParams } from '../../../hooks/useUpdateSelectParams'

export const EditSelectParams: VFC = () => {
  const { id } = useParams<{ id: string }>()
  const task_list_id = Number(id)
  const imp = useRecoilValue(numberState(numberStateKey.imp))
  const urg = useRecoilValue(numberState(numberStateKey.urg))
  const group = useRecoilValue(stringState(stringStateKey.group))
  const { updateSelectParams } = useUpdateSelectParams()
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => updateSelectParams({ e, imp, urg, group, task_list_id })

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
