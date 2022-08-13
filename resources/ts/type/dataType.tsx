export type taskListType = {
  task_list_id: number
  priority: number
  group: string
  task: taskType[]
  is_wait: number
}

export type taskType = {
  task_id: number
  text: string
  order: number
}

export type groupListType = {
  id: number
  group: string
}

export type selectParamsType = {
  imp: number
  urg: number
  group: string
}

export type groupTaskListsType = {
  taskLists: taskListType[]
  group: string
  group_id: number
}[]

export type impTaskListsType = {
  taskLists: taskListType[]
  text: string
  id: number
}[]

export type urgTaskListsType = {
  taskLists: taskListType[]
  text: string
  id: number
}[]

export type helpQustionDataType = {
  id: number
  qustion: string
  answer: string
}

export type allTaskListsType = {
  groupTaskLists: groupTaskListsType
  impTaskLists: impTaskListsType
  urgTaskLists: urgTaskListsType
  taskLists: taskListType[]
}
