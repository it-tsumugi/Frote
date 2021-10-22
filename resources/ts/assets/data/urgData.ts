type urgDataType = {
    num: number;
    text: string;
};

export const urgData: urgDataType[] = [
    {
        num: 4,
        text: "今すぐ終わらせなければならないこと",
    },
    {
        num: 3,
        text: "期限が近く早く終わらせるべきこと",
    },
    {
        num: 2,
        text: "期限はあるがまだ近くないこと",
    },
    {
        num: 1,
        text: "期限はないが早めにしたいこと",
    },
    {
        num: 0,
        text: "全く急ぐ必要のないこと",
    },
];
