import { groupTaskListsType, groupListType, impTaskListsType, urgTaskListsType } from '../assets/type/dataType'
import { atom, atomFamily } from 'recoil'
import { taskListType } from '../assets/type/dataType'
import { fetchTaskLists } from '../api/fetchTaskLists'
import { fetchImpTaskLists } from '../api/fetchImpTaskLists'
import { fetchUrgTaskLists } from '../api/fetchUrgTaskLists'
import { fetchGroupTaskLists } from '../api/fetchGroupTaskLIsts'

//atomFamiliy
export const booleanState = atomFamily<boolean, string>({
  key: 'booleanState',
  default: false
})

export const stringState = atomFamily<string, string>({
  key: 'stringState',
  default: ''
})

export const numberState = atomFamily<number, string>({
  key: 'numberState',
  default: 0
})

//atom
export const taskListsState = atom<taskListType[]>({
  key: 'taskListsState',
  default: fetchTaskLists()
})

export const groupListsState = atom<groupListType[]>({
  key: 'groupListsState',
  default: []
})

export const groupTaskListsState = atom<groupTaskListsType>({
  key: 'groupTaskListsState',
  default: fetchGroupTaskLists()
})

export const impTaskListsState = atom<impTaskListsType>({
  key: 'impTaskListsState',
  default: fetchImpTaskLists()
})

export const urgTaskListsState = atom<urgTaskListsType>({
  key: 'urgTaskListsState',
  default: fetchUrgTaskLists()
})
