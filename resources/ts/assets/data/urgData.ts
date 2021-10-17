type urgDataType = {
    num: number;
    text: string;
};

export const urgData: urgDataType[] = [
    {
        num: 2,
        text: "今すぐ終わらせなければならないこと",
    },
    {
        num: 1,
        text: "期限が近く早く終わらせるべきこと",
    },
    {
        num: 0,
        text: "期限はあるがまだ近くないこと",
    },
    {
        num: -1,
        text: "期限はないが早めにしたいこと",
    },
    {
        num: -2,
        text: "全く急ぐ必要のないこと",
    },
];
