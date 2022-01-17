import { TextField } from '@material-ui/core'
import { VFC } from 'react'
import { FieldArrayWithId, FieldArrayMethodProps, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import media from '../../styles/media'

import { ActionButton } from '../atoms/button/ActionButton'
import { DummyButton } from '../atoms/button/DummyButton'
import { SColumnContainer, SFlexContainer } from '../atoms/style/SelectStyle'

type FormData = {
  tasks: {
    task: string
  }[]
}

type propsType = {
  fields: FieldArrayWithId<FormData, 'tasks', 'id'>[]
  append: (
    value:
      | Partial<{
          task: string
        }>
      | Partial<{
          task: string
        }>[],
    options?: FieldArrayMethodProps | undefined
  ) => void
  remove: (index?: number | number[] | undefined) => void
  insert: (
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
  register: UseFormRegister<FormData>
}

export const AddTaskArea: VFC<propsType> = (props) => {
  const { fields, append, remove, insert, register } = props
  return (
    <SComponentContainer>
      {fields.map((field, index) => (
        <div key={field.id}>
          <SFlexContainer>
            <SColumnContainer>
              <span>{'タスク' + (index + 1)}</span>
              <SFlexContainer>
                <STextField
                  label="タスク"
                  type="text"
                  {...register(`tasks.${index}.task` as const)}
                  inputProps={{
                    style: { backgroundColor: 'white' }
                  }}
                  InputLabelProps={{
                    style: { backgroundColor: 'white' }
                  }}
                  variant="filled"
                  fullWidth
                  margin="normal"
                />
                <SAddTasksButtonAreaContainer>
                  {fields.length !== 1 ? (
                    <ActionButton onClick={() => remove(index)}>削除</ActionButton>
                  ) : (
                    <DummyButton>削除</DummyButton>
                  )}
                  {index < 19 ? (
                    <ActionButton onClick={() => insert(index, {})}>挿入</ActionButton>
                  ) : (
                    <DummyButton>挿入</DummyButton>
                  )}
                </SAddTasksButtonAreaContainer>
              </SFlexContainer>
            </SColumnContainer>
          </SFlexContainer>
        </div>
      ))}
      <ActionButton
        onClick={() => {
          if (fields.length < 20) append({})
          else window.alert('リストが持てるタスクは２０個までです')
        }}
      >
        タスクの追加
      </ActionButton>
    </SComponentContainer>
  )
}

const SComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SAddTasksButtonAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.md`
    flex-direction: column;
    `}
`

const STextField = styled(TextField)`
  width: 700px;
  ${media.lg`
    width: 500px;
    `}
  ${media.md`
    width: 200px;
    `}
`
