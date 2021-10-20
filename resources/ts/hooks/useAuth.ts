import { useAuthContext } from "../providers/AuthProvider";
import axios from "axios";

export const useAuth = async () => {
    const { setIsLogin } = useAuthContext();

    try {
        const res = await axios.get("/api/auth");
        setIsLogin(res.data.isLogin);
        console.log("useAuth:ログイン情報を取得しisLoginセットしました");
    } catch (error) {
        console.log("useAuth:エラー");
        setIsLogin(false);
    }
};
