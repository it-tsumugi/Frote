import { VFC } from 'react'
import styled from 'styled-components'
import { Task } from '../../../molecules/task/Task/Container'
import { taskListType } from '../../../../type/dataType'
import { TaskListButtonArea } from '../../../molecules/task/TaskListButtonArea/Container'
import { SText } from '../../../../styles/commonStyles/text/TextStyle'

type propsType = {
  taskList: taskListType
  priority: number
  isDelete: boolean
  isDisplay: boolean
  setIsDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

type SHiddenDetailPropsType = {
  isChecked: boolean
}

export const PTaskList: VFC<propsType> = ({ taskList, priority, isDisplay, isDelete, setIsDisplay }) => {
  return (
    <SComponetContainer>
      <STaskListContainer>
        <SText>{'優先度:' + (priority + 1) + '　'}</SText>
        <Task task={taskList.task[0]} task_list_id={taskList.task_list_id} isDelete={isDelete} index={0} />
        <SHiddenDetail isChecked={isDisplay}>
          {taskList.task
            .map((task, index) => {
              return <Task task={task} task_list_id={taskList.task_list_id} isDelete index={index} key={task.task_id} />
            })
            .filter((task, index) => index > 0)}
        </SHiddenDetail>
        <TaskListButtonArea taskList={taskList} isChecked={isDisplay} setIsChecked={setIsDisplay} />
      </STaskListContainer>
    </SComponetContainer>
  )
}

const SComponetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const STaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SHiddenDetail = styled.div<SHiddenDetailPropsType>`
  overflow: hidden;
  transition: 0.8s;
  height: ${(props) => (props.isChecked ? 'auto' : 0)};
  opacity: ${(props) => (props.isChecked ? 1 : 0)};
`
