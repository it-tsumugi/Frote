import { VFC } from 'react'
import Grid from '@material-ui/core/Grid'
import { TaskList } from '../TaskList/Container'
import { SCard } from '../../../../styles/commonStyles/card/SCard'
import { taskListType } from '../../../../type/dataType'
import styled from 'styled-components'
import { SText } from '../../../../styles/commonStyles/text/TextStyle'

type propsType = {
  taskLists: taskListType[]
}

export const PTaskLists: VFC<propsType> = ({ taskLists }) => {
  // Warning: Failed prop type: Invalid prop `children` supplied to `ForwardRef(Select)`, expected a ReactNode
  // 上記のエラーが出たため対策としてMaterialコンポーネントのボディ部分を抜き出した
  const Body: VFC = () => {
    return (
      <>
        {taskLists.map((taskList, index) => {
          return (
            !!taskList.is_wait || (
              <Grid item xs={12} sm={12} md={12} lg={12} key={taskList.task_list_id}>
                <SCard>
                  <TaskList taskList={taskList} priority={index} />
                </SCard>
              </Grid>
            )
          )
        })}
      </>
    )
  }

  if (taskLists.length !== 0) {
    return (
      <>
        <STextWrapper>
          <SText>実行可能状態</SText>
        </STextWrapper>
        <Grid container spacing={2}>
          <Body />
        </Grid>

        <STextWrapper>
          <SText>待ち状態</SText>
        </STextWrapper>
        <Grid container spacing={2}>
          {taskLists.map((taskList, index) => {
            return (
              !!taskList.is_wait && (
                <Grid item xs={12} sm={12} md={12} lg={12} key={taskList.task_list_id}>
                  <SCard>
                    <TaskList taskList={taskList} priority={index} />
                  </SCard>
                </Grid>
              )
            )
          })}
        </Grid>
      </>
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
