import axios from "axios";
import { useSetRecoilState } from "recoil";
import { booleanStateKey } from "../assets/data/stateKey";

import { booleanState } from "./../state/atom";

export const useAuth = async () => {
    const setIsLogin = useSetRecoilState(booleanState(booleanStateKey.isLogin));
    const setIsComplete = useSetRecoilState(booleanState("isComplete"));

    try {
        const res = await axios.get("/api/auth");
        setIsLogin(res.data.isLogin);
        setIsComplete(true);
        console.log("useAuth:ログイン情報を取得しisLoginセットしました");
    } catch (error) {
        console.log("useAuth:エラー");
        setIsLogin(false);
    }
};
