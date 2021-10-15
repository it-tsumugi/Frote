import axios from "axios";
import { VFC } from "react";

export const Test: VFC = () => {
    const test = async () => {
        try {
            const res = await axios.get("/api/test");
            console.log(res.data.data);
        } catch (err) {
            console.log("Test:接続に失敗");
            console.log(err);
        }
    };

    return (
        <>
            <h1>テストデータフェッチボタン</h1>
            <button onClick={test}>ボタン</button>
        </>
    );
};
