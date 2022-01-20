import { VFC } from 'react'
import { SetterOrUpdater } from 'recoil'
import { FormCard } from '../../../styles/commonStyles/card/FormCard'
import { DefaultTextField } from '../../atoms/form/DefaultTextField'
import { ActionButton } from '../../../styles/commonStyles/button/ActionButton'
import { SActionText } from '../../../styles/commonStyles/text/TextStyle'

type propsType = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  task: string
  taskError: string
  setTask: SetterOrUpdater<string>
}

export const PEditTask: VFC<propsType> = ({ onSubmit, task, taskError, setTask }) => {
  return (
    <>
      <SActionText>タスクを編集してください</SActionText>
      <FormCard>
        <form onSubmit={onSubmit}>
          <DefaultTextField
            value={task}
            name="task"
            label="タスク"
            type="text"
            error={Boolean(taskError)}
            helperText={taskError}
            onChange={(e) => setTask(e.target.value)}
          />
          <ActionButton type="submit">更新</ActionButton>
        </form>
      </FormCard>
    </>
  )
}
