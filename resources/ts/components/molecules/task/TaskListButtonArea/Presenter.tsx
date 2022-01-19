import { VFC } from 'react'
import styled from 'styled-components'
import { NavButton } from '../../../../styles/commonStyles/NavButton'
import { DefaultButton } from '../../../atoms/button/DefaultButton'
import { path } from '../../../../constant/path'
import { taskListType } from '../../../../type/dataType'

type propsType = {
  taskList: taskListType
  isChecked: boolean
  deleteHandler: () => Promise<void>
  toggleHandler: () => void
}

export const PTaskListButtonArea: VFC<propsType> = ({ taskList, isChecked, deleteHandler, toggleHandler }) => {
  return (
    <>
      <SComponentContainer>
        {taskList.task.length > 1 ? (
          <DefaultButton onClick={toggleHandler}>{isChecked ? '閉じる' : 'すべて表示'}</DefaultButton>
        ) : (
          <DefaultButton style={{ visibility: 'hidden' }}>すべて表示</DefaultButton>
        )}
        <DefaultButton onClick={deleteHandler}>リストを削除</DefaultButton>
        <NavButton to={`/${taskList.task_list_id}` + path.editTaskList}>リストを編集</NavButton>
        {taskList.task.length < 20 ? (
          <NavButton to={`/${taskList.task_list_id}` + path.addTasks}>末尾にタスクを追加</NavButton>
        ) : (
          <DefaultButton style={{ visibility: 'hidden' }}>末尾にタスクを追加</DefaultButton>
        )}
      </SComponentContainer>
    </>
  )
}

const SComponentContainer = styled.div`
  display: flex;
`

const SEmpty = styled(DefaultButton)`
  visibility: hidden;
`
