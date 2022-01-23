import axios from 'axios'
import { SetterOrUpdater } from 'recoil'

type propsType = {
  task_id: number
  setTask: SetterOrUpdater<string>
}

export const fetchTaskApi = async (props: propsType) => {
  const { task_id, setTask } = props
  let dbData: string = ''
  try {
    const res = await axios.get('/api/read/task', {
      params: {
        task_id: task_id
      }
    })
    dbData = res.data.data[0].task
    console.log(dbData)
  } catch (err) {
    console.log(err)
  }
  setTask(dbData)
}
