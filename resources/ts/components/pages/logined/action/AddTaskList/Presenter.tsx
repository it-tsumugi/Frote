import { VFC } from 'react'
import styled from 'styled-components'
import { ImpSelect } from '../../../../molecules/select/ImpSelect'
import { UrgSelect } from '../../../../molecules/select/UrgSelect'
import { GroupSelect } from '../../../../molecules/select/GroupSelect'
import { NavButton } from '../../../../atoms/button/NavButton'
import { AddTaskArea } from '../../../../organisms/AddTaskArea'
import { ActionButton } from '../../../../atoms/button/ActionButton'
import { FormCard } from '../../../../atoms/form/FormCard'
import { SActionText } from '../../../../atoms/style/TextStyle'
import { path } from '../../../../../assets/data/path'
import { FieldArrayMethodProps, FieldArrayWithId, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { addTaskListOnSubmitType, FormData } from '../../../../../assets/type/dataType'

type appendType = (
  value:
    | Partial<{
        task: string
      }>
    | Partial<{
        task: string
      }>[],
  options?: FieldArrayMethodProps | undefined
) => void

type insertType = (
  index: number,
  value:
    | Partial<{
        task: string
      }>
    | Partial<{
        task: string
      }>[],
  options?: FieldArrayMethodProps | undefined
) => void

type propsType = {
  handleSubmit: UseFormHandleSubmit<FormData>
  onSubmit: (props: addTaskListOnSubmitType) => void
  fields: FieldArrayWithId<FormData, 'tasks', 'id'>[]
  append: appendType
  remove: (index?: number | number[] | undefined) => void
  insert: insertType
  register: UseFormRegister<FormData>
  onClick: () => void
}

export const PAddTaskList: VFC<propsType> = ({
  handleSubmit,
  onSubmit,
  fields,
  append,
  remove,
  insert,
  register,
  onClick
}) => {
  return (
    <>
      <SActionText>リストの内容を入力してください</SActionText>
      <FormCard>
        <SForm onSubmit={handleSubmit((data, e) => onSubmit({ e, data }))}>
          <AddTaskArea fields={fields} append={append} remove={remove} insert={insert} register={register} />
          <div>
            <ImpSelect task_list_id={-1} />
            <UrgSelect task_list_id={-1} />
            <GroupSelect task_list_id={-1} />
          </div>
          <ActionButton type="submit" onClick={onClick}>
            決定
          </ActionButton>
        </SForm>
      </FormCard>
      <NavButton to={path.addGroup}>グループの追加へ</NavButton>
    </>
  )
}

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
