import axios from 'axios'
import { VFC } from 'react'
import { useSetRecoilState } from 'recoil'

import { DefaultButton } from './DefaultButton'

import { taskType, urgTaskListsType } from '../../../type/dataType'
import { urgTaskListsState } from '../../../state/atom'
import { urgData } from '../../../constant/urgData'

type propsType = {
  task: taskType
  task_list_id: number
  children: string
}

export const DeleteUrgTaskButton: VFC<propsType> = (props) => {
  const { task, children, task_list_id } = props
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

  const deleteTask = async () => {
    const order: number = task.order
    try {
      const res = await axios.delete('/api/delete/task', {
        data: {
          task_id: task.task_id,
          task_list_id: task_list_id,
          order: order
        }
      })
      if (res.data.result) {
        console.log('deleteTask:タスクの削除に成功しました')
      } else {
        console.log('deleteTask:タスクの削除に失敗しました')
      }
      await getTaskLists()
    } catch (err) {
      console.log(err)
    }
  }

  return <DefaultButton onClick={deleteTask}>{children}</DefaultButton>
}
