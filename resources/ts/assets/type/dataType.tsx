export type userInfoType = {
    created_at: string;
    email: string;
    email_verified_at: string;
    id: number;
    name: string;
    password: string;
    remember_token: string;
};

export type allListsType = {
    task_list_id: number;
    priority: number;
    group: string;
    tasks: {
        task_id: number;
        task: string;
    }[];
};
