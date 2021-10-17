export type userInfoType = {
    created_at: string;
    email: string;
    email_verified_at: string;
    id: number;
    name: string;
    password: string;
    remember_token: string;
};

export type taskListType = {
    task_list_id: number;
    priority: number;
    group: string;
    task: taskType[];
};

export type taskType = {
    task_id: number;
    text: string;
    order: number;
};

export type DBType = {
    task_id: number;
    task_list_id: number;
    importance: -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
    urgency: -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
    group: string;
    task: string;
    order: number;
};

export type groupListType = {
    id: number;
    group: string;
};

export type selectParamsType = {
    imp: number;
    urg: number;
    group: string;
};

export type groupTaskListsType = {
    taskLists: taskListType[];
    group: string;
    group_id: number;
}[];

export type impTaskListsType = {
    taskLists: taskListType[];
    text: string;
    id: number;
}[];

export type urgTaskListsType = {
    taskLists: taskListType[];
    text: string;
    id: number;
}[];
