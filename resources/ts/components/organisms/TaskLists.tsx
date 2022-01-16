import { VFC } from 'react'
import Grid from '@material-ui/core/Grid'
import { TaskList } from './TaskList'
import { SCard } from '../atoms/style/SCard'
import { taskListType } from '../../assets/type/dataType'
import { Text } from '../atoms/style/Text'
import styled from 'styled-components'

type propsType = {
  taskLists: taskListType[]
}

export const TaskLists: VFC<propsType> = (props) => {
  const { taskLists } = props

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
      <SText>
        <Text>タスクは存在しません</Text>
      </SText>
    )
  }
}

const SText = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`
