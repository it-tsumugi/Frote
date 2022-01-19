import axios from 'axios'
import { groupListType } from '../type/dataType'
import { SetterOrUpdater } from 'recoil'

type propsType = {
  setGroup: SetterOrUpdater<string>
  setGroupList: SetterOrUpdater<groupListType[]>
}

export const fetchGroupList = async (props: propsType) => {
  const { setGroup, setGroupList } = props
  let dbData: groupListType[] = []
  try {
    const res = await axios.get('/api/read/grouplist')
    if (res.data.result) {
      console.log('DeleteGroupButton:データ取得に成功しました')
      dbData = res.data.data
      setGroupList(dbData)
      //groupの初期値の設定
      setGroup(dbData[0].group)
    } else {
      window.alert('データの取得に失敗しました')
    }
  } catch (err) {
    console.log(err)
    window.alert('エラーが発生しました')
  }
}
