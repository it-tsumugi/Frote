import { VFC } from 'react'
import styled from 'styled-components'
import { DefaultButton, DefaultButton2 } from '../../atoms/button/DefaultButton'
import { NavButton } from '../../atoms/button/NavButton'
import { path } from '../../../assets/data/path'
import { taskType } from '../../../assets/type/dataType'
import { SText } from '../../atoms/style/TextStyle'
import media from '../../../assets/styles/media'
import { deleteTask } from '../../../api/deleteTask'
import { useGetActions } from '../../../hooks/action/useGetActions'

type propsType = {
  task: taskType
  task_list_id: number
  isDelete: boolean
  index: number
}

export const Task: VFC<propsType> = (props) => {
  const { task, task_list_id, isDelete, index } = props
  const { getAllTaskLists } = useGetActions()
  const deleteTaskProps = { task, task_list_id, getAllTaskLists }

  const DeleteButton: VFC = () => {
    const onClick = () => deleteTask(deleteTaskProps)
    return <DefaultButton2 onClick={onClick}>削除</DefaultButton2>
  }

  return (
    <SComponentContainer>
      <STaskTextarea>
        {index < 9 ? (
          <SSText>{'0' + task.order + ' :' + task.text} </SSText>
        ) : (
          <SSText>{task.order + ' :' + task.text} </SSText>
        )}
      </STaskTextarea>
      <STaskButtonAreaContainer>
        {isDelete ? <DeleteButton /> : <EmptyButton>削除</EmptyButton>}
        <NavButton to={`/${task.task_id}` + path.insertTask}>挿入</NavButton>
        <NavButton to={`/${task.task_id}` + path.editTask}>編集</NavButton>
      </STaskButtonAreaContainer>
    </SComponentContainer>
  )
}

const SComponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.md`
    border: 1px solid white;
    border-radius: 2px;
    `}
`

const STaskButtonAreaContainer = styled.div`
  padding-left: 20px;

  ${media.lg`
    padding-left: 10px;
    `}
  ${media.md`
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    `}
`

const STaskTextarea = styled.div`
  display: flex;
  justify-content: center;
`

const SSText = styled(SText)`
  width: 1000px;
  @media (max-width: 1700px) and (min-width: 1170px) {
    width: 600px;
  }

  ${media.lg`
    width: 400px;
    `}
  ${media.md`
    width: 250px;
    `}
`

const EmptyButton = styled(DefaultButton)`
  visibility: hidden;
`
