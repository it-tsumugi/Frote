import { VFC } from 'react'
import { NavButton } from '../../../styles/commonStyles/NavButton'
import { path } from '../../../constant/path'
import styled from 'styled-components'

export const TaskListsButtonArea: VFC = () => {
  return (
    <SComponentContainer>
      <NavButton to={path.addTaskList}>タスクリストの追加</NavButton>
      <NavButton to={path.group}>グループの編集</NavButton>
    </SComponentContainer>
  )
}

const SComponentContainer = styled.div`
  margin: 20px 0 100px 0;
`
