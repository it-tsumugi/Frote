import axios from 'axios'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { stringStateKey } from '../constant/stateKey'

import { stringState } from '../state/atom'
import { tasksType } from '../type/action/addTasksType'

export const useGetTask = (task_id: number) => {
  const setTask = useSetRecoilState(stringState(stringStateKey.task))
  const getTasks = async () => {
    let dbData: tasksType = []
    try {
      const res = await axios.get('/api/read/task', {
        params: {
          task_id: task_id
        }
      })
      dbData = res.data.data
    } catch (err) {
      console.log(err)
    }
    setTask(dbData[0].task)
  }

  useEffect(() => {
    getTasks()
  }, [])
}
