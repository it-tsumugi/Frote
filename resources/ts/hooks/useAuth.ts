import axios from "axios";
import { useSetRecoilState } from "recoil";

import { booleanState } from "./../state/atom";

export const useAuth = async () => {
    const setIsLogin = useSetRecoilState(booleanState("isLogin"));

    try {
        const res = await axios.get("/api/auth");
        setIsLogin(res.data.isLogin);
        console.log("useAuth:ログイン情報を取得しisLoginセットしました");
    } catch (error) {
        console.log("useAuth:エラー");
        setIsLogin(false);
    }
};
