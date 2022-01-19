import { VFC } from 'react'
import Grid from '@material-ui/core/Grid'
import { TaskList } from '../TaskList/Container'
import { SCard } from '../../../../styles/style/SCard'
import { taskListType } from '../../../../type/dataType'
import styled from 'styled-components'
import { SText } from '../../../../styles/style/TextStyle'

type propsType = {
  taskLists: taskListType[]
}

export const PTaskLists: VFC<propsType> = ({ taskLists }) => {
  if (taskLists.length !== 0) {
    return (
      <Grid container spacing={2}>
        {taskLists.map((taskList, index) => {
          return (
            <Grid item xs={12} sm={12} md={12} lg={12} key={taskList.task_list_id}>
              <SCard>
                <TaskList taskList={taskList} priority={index} />
              </SCard>
            </Grid>
          )
        })}
      </Grid>
    )
  } else {
    return (
      <STextWrapper>
        <SText>タスクは存在しません</SText>
      </STextWrapper>
    )
  }
}

const STextWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`
