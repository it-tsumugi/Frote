import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import { useEffect } from 'react'

import { groupListsState, stringState } from './../state/atom'
import { groupListType } from '../type/dataType'
import { stringStateKey } from '../constant/stateKey'

export const useGetSelectParams = () => {
  const setGroupList = useSetRecoilState(groupListsState)
  const setGroup = useSetRecoilState(stringState(stringStateKey.group))

  const getSelectParams = async () => {
    let dbData: groupListType[] = []
    try {
      const res = await axios.get('/api/read/select-params')
      console.log('useGetGroupLists:データ取得に成功しました')
      dbData = res.data.data
      //groupの初期値の設定
      if (dbData.length !== 0) setGroup(dbData[0].group)
    } catch (err) {
      console.log('useGetGroupLists:エラー')
      console.log(err)
    }
    setGroupList(dbData)
  }

  useEffect(() => {
    getSelectParams()
  }, [])
}
