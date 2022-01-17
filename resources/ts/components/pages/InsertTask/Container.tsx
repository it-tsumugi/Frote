import { useEffect, useState, VFC } from 'react'
import { useParams } from 'react-router'
import { errorMessages } from '../../../constant/errorMessages'
import { useGetActions } from '../../../hooks/useGetActions'
import { PInsertTask } from './Presenter'

export const InsertTask: VFC = () => {
  const [task, setTask] = useState('')
  const { id } = useParams<{ id: string }>()
  const task_id = Number(id)
  const [taskError, setTaskError] = useState('')
  const { insertTask } = useGetActions()

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => insertTask({ e, checkIsSuccess, task, task_id })

  return <PInsertTask onSubmit={onSubmit} taskError={taskError} setTask={setTask} />
}
