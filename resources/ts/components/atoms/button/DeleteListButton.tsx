import { VFC } from 'react'
import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import { DefaultButton } from '../../atoms/button/DefaultButton'
import { taskListType } from '../../../type/dataType'
import { taskListsState } from '../../../state/atom'
import { useGetTaskLists } from '../../../hooks/useGetTaskLists'

type propsType = {
  taskList: taskListType
  children: string
}

export const DeleteListButton: VFC<propsType> = (props) => {
  const { taskList, children } = props
  const setTaskLists = useSetRecoilState(taskListsState)
  const { getTaskLists } = useGetTaskLists()

  const deleteTaskList = async () => {
    try {
      const res = await axios.delete('/api/delete/tasklist', {
        data: { task_list_id: taskList.task_list_id }
      })
      if (res.data.result) {
        console.log('deleteTaskList:タスクの削除に成功しました')
      } else {
        console.log('deleteTaskList:タスクの削除に失敗しました')
      }
      getTaskLists()
    } catch (err) {
      console.log(err)
    }
  }

  return <DefaultButton onClick={deleteTaskList}>{children}</DefaultButton>
}
