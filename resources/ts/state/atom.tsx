import { groupTaskListsType, groupListType, impTaskListsType, urgTaskListsType } from '../type/dataType'
import { atom, atomFamily } from 'recoil'
import { taskListType } from '../type/dataType'

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
  default: []
})

export const groupListsState = atom<groupListType[]>({
  key: 'groupListsState',
  default: []
})

export const groupTaskListsState = atom<groupTaskListsType>({
  key: 'groupTaskListsState',
  default: []
})

export const impTaskListsState = atom<impTaskListsType>({
  key: 'impTaskListsState',
  default: []
})

export const urgTaskListsState = atom<urgTaskListsType>({
  key: 'urgTaskListsState',
  default: []
})
