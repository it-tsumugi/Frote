type DBType = {
    task_id: number;
    task_list_id: number;
    importance: -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
    urgency: -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
    group: string;
    task: string;
};

export const dbData: DBType[] = [
    {
        task_id: 1,
        task_list_id: 1,
        importance: 3,
        urgency: 2,
        group: "就活",
        task: "ポートフォリオのUI完成",
    },
    {
        task_id: 2,
        task_list_id: 1,
        importance: 3,
        urgency: 2,
        group: "就活",
        task: "RESTAPIの作成",
    },
    {
        task_id: 3,
        task_list_id: 1,
        importance: 3,
        urgency: 2,
        group: "就活",
        task: "挙動の確認",
    },
    {
        task_id: 4,
        task_list_id: 1,
        importance: 3,
        urgency: 2,
        group: "就活",
        task: "プロフィールなどの作成",
    },
    {
        task_id: 5,
        task_list_id: 2,
        importance: 1,
        urgency: -1,
        group: "研究",
        task: "MESI-CUDAの論文調査",
    },
    {
        task_id: 6,
        task_list_id: 2,
        importance: 1,
        urgency: -1,
        group: "研究",
        task: "大野先生に報告",
    },
    {
        task_id: 7,
        task_list_id: 3,
        importance: 1,
        urgency: -1,
        group: "学校",
        task: "実践ソフトウェア",
    },
];
