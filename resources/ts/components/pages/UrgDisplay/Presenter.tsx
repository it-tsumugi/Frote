import { VFC } from 'react'
import styled from 'styled-components'
import { TaskLists } from '../../organisms/task/TaskLists/Container'
import { TaskListsButtonArea } from '../../molecules/task/TaskListsButtonArea'
import { SText } from '../../../styles/commonStyles/text/TextStyle'
import { urgTaskListsType } from '../../../type/dataType'

type propsType = {
  urgTaskLists: urgTaskListsType
}

export const PUrgDisplay: VFC<propsType> = ({ urgTaskLists }) => {
  return (
    <>
      {urgTaskLists.map((urgTaskLists) => {
        return (
          <SUrgTaskLists key={urgTaskLists.id}>
            <SText>{urgTaskLists.text}</SText>
            <TaskLists taskLists={urgTaskLists.taskLists} />
          </SUrgTaskLists>
        )
      })}
      <TaskListsButtonArea />
    </>
  )
}

const SUrgTaskLists = styled.div`
  margin-top: 20px;
`
