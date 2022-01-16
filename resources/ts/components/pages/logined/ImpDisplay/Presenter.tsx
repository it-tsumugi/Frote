import { VFC } from 'react'
import styled from 'styled-components'
import { TaskLists } from '../../../organisms/TaskLists'
import { TaskListsButtonArea } from '../../../molecules/task/TaskListsButtonArea'
import { SText } from '../../../atoms/style/TextStyle'
import { impTaskListsType } from '../../../../assets/type/dataType'

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
