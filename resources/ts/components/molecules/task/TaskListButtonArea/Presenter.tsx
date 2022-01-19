import { VFC } from 'react'
import styled from 'styled-components'
import { NavButton } from '../../../../styles/commonStyles/NavButton'
import { DefaultButton, DefaultButton2 } from '../../../atoms/button/DefaultButton'
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
          <SEmpty>すべて表示</SEmpty>
        )}
        <DefaultButton2 onClick={deleteHandler}>リストを削除</DefaultButton2>
        <NavButton to={`/${taskList.task_list_id}` + path.editTaskList}>リストを編集</NavButton>
        {taskList.task.length < 20 ? (
          <NavButton to={`/${taskList.task_list_id}` + path.addTasks}>末尾にタスクを追加</NavButton>
        ) : (
          <SEmpty>末尾にタスクを追加</SEmpty>
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
