import { VFC } from 'react'
import styled from 'styled-components'
import { TaskLists } from '../../organisms/task/TaskLists/Container'
import { TaskListsButtonArea } from '../../molecules/task/TaskListsButtonArea'
import { SText } from '../../../styles/commonStyles/TextStyle'
import { impTaskListsType } from '../../../type/dataType'

type propsType = {
  impTaskLists: impTaskListsType
}

export const PImpDisplay: VFC<propsType> = ({ impTaskLists }) => {
  return (
    <>
      {impTaskLists.map((impTaskList) => {
        return (
          <SImpTaskLists key={impTaskList.id}>
            <SText>{impTaskList.text}</SText>
            <TaskLists taskLists={impTaskList.taskLists} />
          </SImpTaskLists>
        )
      })}
      <TaskListsButtonArea />
    </>
  )
}

const SImpTaskLists = styled.div`
  margin-top: 20px;
`
