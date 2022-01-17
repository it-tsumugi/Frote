import { useEffect, useState, VFC } from 'react'
import { useParams } from 'react-router'
import { useRecoilState } from 'recoil'
import { FormCard } from '../../atoms/form/FormCard'
import { DefaultTextField } from '../../atoms/form/DefaultTextField'
import { ActionButton } from '../../atoms/button/ActionButton'
import { SActionText } from '../../atoms/style/TextStyle'
import { useGetTask } from '../../../hooks/useGetTask'
import { stringState } from '../../../state/atom'
import { errorMessages } from '../../../constant/errorMessages'
import { stringStateKey } from '../../../constant/stateKey'
import { useGetActions } from '../../../hooks/useGetActions'

export const EditTask: VFC = () => {
  const { id } = useParams<{ id: string }>()
  const task_id = Number(id)
  const [task, setTask] = useRecoilState(stringState(stringStateKey.task))
  const [taskError, setTaskError] = useState('')
  const { updateTask } = useGetActions()

  const validateLogin = () => {
    if (task.length === 0) setTaskError(errorMessages.task.blank)
    else if (task.length > 20) setTaskError(errorMessages.task.maxLength)
    else setTaskError('')
  }

  const checkIsSuccess = () => {
    if (taskError === '') return true
    else return false
  }

  useEffect(() => {
    validateLogin()
  }, [task])

  useGetTask(task_id)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => updateTask({ e, task, task_id, checkIsSuccess })

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
