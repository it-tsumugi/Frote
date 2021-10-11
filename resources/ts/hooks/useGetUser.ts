// import { useUserContext } from "./../providers/UserInfoProvder";
// import { useEffect } from "react";
// import axios from "axios";

// export const useGetUser = () => {
//     const { setUserInfo } = useUserContext();
//     useEffect(() => {
//         getUserInfo();
//     }, []);

//     const getUserInfo = async () => {
//         try {
//             const res = await axios.get("/api/user");
//             setUserInfo(res.data.user[0]);
//             console.log("useGetUser:ユーザ情報を取得しました");
//         } catch (error) {
//             console.log("useGetUser:ユーザ情報の取得に失敗しました");
//             console.log(error);
//         }
//     };
// };
