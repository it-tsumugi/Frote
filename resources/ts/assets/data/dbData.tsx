type DBType = {
    id: number;
    task_id: number;
    task_list_id: number;
    importance: -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
    urgency: -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
    group: string;
    task: string;
};

export const dbData: DBType[] = [
    {
        id: 1,
        task_list_id: 1,
        task_id: 1,
        importance: 3,
        urgency: 2,
        group: '就活',
        task: 'ポートフォリオのUI完成',
    },
    {
        id: 1,
        task_list_id: 1,
        task_id: 2,
        importance: 3,
        urgency: 2,
        group: '就活',
        task: 'RESTAPIの作成',
    },
    {
        id: 1,
        task_list_id: 1,
        task_id: 3,
        importance: 3,
        urgency: 2,
        group: '就活',
        task: '挙動の確認',
    },
    {
        id: 1,
        task_list_id: 1,
        task_id: 4,
        importance: 3,
        urgency: 2,
        group: '就活',
        task: 'プロフィールなどの作成',
    },
    {
        id: 1,
        task_list_id: 2,
        task_id: 1,
        importance: 1,
        urgency: -1,
        group: '研究',
        task: 'MESI-CUDAの論文調査',
    },
    {
        id: 1,
        task_list_id: 2,
        task_id: 2,
        importance: 1,
        urgency: -1,
        group: '研究',
        task: '大野先生に報告',
    },
    {
        id: 1,
        task_list_id: 3,
        task_id: 1,
        importance: 1,
        urgency: -1,
        group: '学校',
        task: '実践ソフトウェア',
    },
];
