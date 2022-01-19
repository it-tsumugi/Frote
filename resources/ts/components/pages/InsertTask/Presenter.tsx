import { VFC } from 'react'
import { DefaultTextField } from '../../atoms/form/DefaultTextField'
import { FormCard } from '../../../styles/commonStyles/FormCard'
import { SActionText } from '../../../styles/commonStyles/TextStyle'
import { ActionButton } from '../../../styles/commonStyles/ActionButton'

type propsType = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  taskError: string
  setTask: React.Dispatch<React.SetStateAction<string>>
}

export const PInsertTask: VFC<propsType> = ({ onSubmit, taskError, setTask }) => {
  return (
    <>
      <SActionText>追加するタスクを入力してください</SActionText>
      <FormCard>
        <form onSubmit={onSubmit}>
          <DefaultTextField
            name="task"
            label="タスク"
            type="text"
            error={Boolean(taskError)}
            helperText={taskError}
            onChange={(e) => setTask(e.target.value)}
          />
          <ActionButton type="submit">送信</ActionButton>
        </form>
      </FormCard>
    </>
  )
}
