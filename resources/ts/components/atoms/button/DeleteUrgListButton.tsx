import { VFC } from 'react'

import axios from 'axios'
import { useSetRecoilState } from 'recoil'

import { DefaultButton } from '../../atoms/button/DefaultButton'

import { taskListType, urgTaskListsType } from '../../../type/dataType'
import { urgTaskListsState } from '../../../state/atom'
import { urgData } from '../../../constant/urgData'

type propsType = {
  taskList: taskListType
  children: string
}

export const DeleteUrgListButton: VFC<propsType> = (props) => {
  const { taskList, children } = props
  const setUrgTaskLists = useSetRecoilState(urgTaskListsState)
  const getTaskLists = async () => {
    let dbData: urgTaskListsType = [
      {
        taskLists: [],
        text: '',
        id: 0
      }
    ]
    try {
      const res = await axios.post('/api/read/urg-tasklists', {
        urgData
      })
      console.log('DeleteUrgTaskButton:データ取得に成功しました')
      dbData = res.data
    } catch (err) {
      console.log('DeleteUrgTaskButton:エラー')
      console.log(err)
    }
    setUrgTaskLists(dbData)
  }

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
