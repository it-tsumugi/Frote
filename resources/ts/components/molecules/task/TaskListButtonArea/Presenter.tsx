import { FC, VFC } from 'react'
import styled from 'styled-components'
import { NavButton } from '../../../../styles/commonStyles/button/NavButton'
import { DefaultButton } from '../../../../styles/commonStyles/button/DefaultButton'
import { path } from '../../../../constant/path'
import { taskListType } from '../../../../type/dataType'
import { HiddenDefaultButton } from '../../../../styles/commonStyles/button/HiddenDefaultButton'

type propsType = {
  taskList: taskListType
  isDisplay: boolean
  deleteHandler: () => Promise<void>
  toggleHandler: () => void
  fetchParamsHandler: () => void
}

export const PTaskListButtonArea: VFC<propsType> = ({
  taskList,
  isDisplay,
  deleteHandler,
  toggleHandler,
  fetchParamsHandler
}) => {
  const displayText = isDisplay ? '閉じる' : 'すべて表示'
  const addTasksPath = `/${taskList.task_list_id}` + path.addTasks

  const DisplayButton: FC = ({ children }) => (
    <>
      {taskList.task.length > 1 ? (
        <DefaultButton onClick={toggleHandler}>{children}</DefaultButton>
      ) : (
        <HiddenDefaultButton>{children}</HiddenDefaultButton>
      )}
    </>
  )

  const AddTasksButton: FC = ({ children }) => (
    <>
      {taskList.task.length < 20 ? (
        <NavButton to={addTasksPath}>{children}</NavButton>
      ) : (
        <DefaultButton style={{ visibility: 'hidden' }}>{children}</DefaultButton>
      )}
    </>
  )

  return (
    <>
      <SComponentContainer>
        <DisplayButton>{displayText}</DisplayButton>
        <DefaultButton onClick={deleteHandler}>リストを削除</DefaultButton>
        <DefaultButton onClick={fetchParamsHandler}>リストを編集</DefaultButton>
        <AddTasksButton>末尾にタスクを追加</AddTasksButton>
      </SComponentContainer>
    </>
  )
}

const SComponentContainer = styled.div`
  display: flex;
`
