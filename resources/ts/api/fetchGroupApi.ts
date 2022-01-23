import axios from 'axios'
import { SetterOrUpdater } from 'recoil'

type propsType = {
  id: number
  key: string
  setGroup: SetterOrUpdater<string>
}
export const fetchGroupApi = async (props: propsType) => {
  const { id, key, setGroup } = props

  let dbData: {
    group: string
  } = { group: '' }
  try {
    const res = await axios.get('/api/read/group', {
      params: {
        id: id,
        key: key
      }
    })
    dbData = res.data.data
  } catch (err) {
    console.log(err)
  }
  setGroup(dbData.group)
}
