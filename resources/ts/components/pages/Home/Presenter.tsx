import { VFC } from 'react'
import { TaskLists } from '../../organisms/task/TaskLists/Container'
import { TaskListsButtonArea } from '../../molecules/task/TaskListsButtonArea'
import { taskListType } from '../../../type/dataType'
import styled from 'styled-components'

type propsType = {
  taskLists: taskListType[]
}

export const PHome: VFC<propsType> = ({ taskLists }) => {
  return (
    <SComponentContainer>
      <TaskListsButtonArea />
      <TaskLists taskLists={taskLists} />
    </SComponentContainer>
  )
}

const SComponentContainer = styled.div`
  margin-bottom: 100px;
`
