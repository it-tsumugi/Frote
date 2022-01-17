import { VFC } from 'react'
import styled from 'styled-components'

import { NavButton } from '../../atoms/button/NavButton'
import { DeleteListButton } from '../../atoms/button/DeleteListButton'
import { DefaultButton, DefaultButton2 } from '../../atoms/button/DefaultButton'

import { path } from '../../../constant/path'
import { taskListType } from '../../../type/dataType'
import { DeleteGroupListButton } from '../../atoms/button/DeleteGroupListButton'
import { DeleteUrgListButton } from '../../atoms/button/DeleteUrgListButton'
import { DeleteImpListButton } from '../../atoms/button/DeleteImpListButton'
import { Grid } from '@material-ui/core'
import { deleteTaskList } from '../../../api/deleteTaskList'
import { useGetActions } from '../../../hooks/useGetActions'

type propsType = {
  taskList: taskListType
  isChecked: boolean
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
  //   taskType: string
}

export const TaskListButtonArea: VFC<propsType> = (props) => {
  const { taskList, isChecked, setIsChecked } = props
  const { getAllTaskLists } = useGetActions()
  const onClick = () => deleteTaskList({ getAllTaskLists, task_list_id: taskList.task_list_id })
  const DeleteButton: VFC = () => {
    return <DefaultButton2 onClick={onClick}>リストを削除</DefaultButton2>
  }

  return (
    <>
      <SComponentContainer>
        {taskList.task.length > 1 ? (
          <DefaultButton onClick={() => setIsChecked(!isChecked)}>{isChecked ? '閉じる' : 'すべて表示'}</DefaultButton>
        ) : (
          <SEmpty>すべて表示</SEmpty>
        )}

        <DeleteButton />
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
