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
    task: {
        task_id: number;
        text: string;
    }[];
};

export type DBType = {
    task_id: number;
    task_list_id: number;
    importance: -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
    urgency: -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
    group: string;
    task: string;
};

export type groupListType = {
    id: number;
    group: string;
};
