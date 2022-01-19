import { VFC } from 'react'
import styled from 'styled-components'
import { TaskLists } from '../../organisms/task/TaskLists/Container'
import { TaskListsButtonArea } from '../../molecules/task/TaskListsButtonArea'
import { SText } from '../../../styles/commonStyles/TextStyle'
import { groupTaskListsType } from '../../../type/dataType'

type propsType = {
  groupTaskLists: groupTaskListsType
}

export const PGroupDisplay: VFC<propsType> = ({ groupTaskLists }) => {
  return (
    <>
      {groupTaskLists.map((groupTaskLists) => {
        return (
          <SGroupTaskLists key={groupTaskLists.group_id}>
            <SText>{groupTaskLists.group}</SText>
            <TaskLists taskLists={groupTaskLists.taskLists} />
          </SGroupTaskLists>
        )
      })}
      <TaskListsButtonArea />
    </>
  )
}

const SGroupTaskLists = styled.div`
  margin-top: 20px;
`
