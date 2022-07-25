import { VFC } from 'react'
import styled from 'styled-components'
import { TaskLists } from '../../organisms/task/TaskLists/Container'
import { TaskListsButtonArea } from '../../molecules/task/TaskListsButtonArea'
import { SText } from '../../../styles/commonStyles/text/TextStyle'
import { groupTaskListsType } from '../../../type/dataType'

type propsType = {
  groupTaskLists: groupTaskListsType
}

export const PGroupDisplay: VFC<propsType> = ({ groupTaskLists }) => {
  if (groupTaskLists.length !== 0) {
    return (
      <SComponentContainer>
        <TaskListsButtonArea />
        {groupTaskLists.map((groupTaskLists) => {
          return (
            <SGroupTaskLists key={groupTaskLists.group_id}>
              <SText>{groupTaskLists.group}</SText>
              <TaskLists taskLists={groupTaskLists.taskLists} />
            </SGroupTaskLists>
          )
        })}
      </SComponentContainer>
    )
  } else {
    return (
      <SComponentContainer>
        <TaskListsButtonArea />
        <STextWrapper>
          <SText>タスクは存在しません</SText>
        </STextWrapper>
      </SComponentContainer>
    )
  }
}

const SComponentContainer = styled.div`
  margin-bottom: 100px;
`

const SGroupTaskLists = styled.div`
  margin-top: 20px;
`

const STextWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`
