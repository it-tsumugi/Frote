import { VFC } from 'react'
import styled from 'styled-components'
import {
  addTasksAppendType,
  addTasksFieldsType,
  addTasksInsertType,
  addTasksRegisterType,
  addTasksRemoveType
} from '../../../type/action/addTasksType'
import { AddTaskArea } from '../../organisms/task/AddTaskArea/Container'
import { ActionButton } from '../../../styles/commonStyles/ActionButton'
import { FormCard } from '../../../styles/commonStyles/FormCard'
import { SActionText } from '../../../styles/commonStyles/TextStyle'

type propsType = {
  onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
  fields: addTasksFieldsType
  append: addTasksAppendType
  remove: addTasksRemoveType
  insert: addTasksInsertType
  register: addTasksRegisterType
  onClick: () => void
}

export const PAddTasks: VFC<propsType> = ({ onSubmit, fields, append, remove, insert, register, onClick }) => {
  return (
    <>
      <SActionText>タスクを追加してください</SActionText>
      <FormCard>
        <SForm onSubmit={onSubmit}>
          <AddTaskArea fields={fields} append={append} remove={remove} insert={insert} register={register} />
          <ActionButton type="submit" onClick={onClick}>
            決定
          </ActionButton>
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
