import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import TextField from "@material-ui/core/TextField";
import { Button, Card } from "@material-ui/core";

import { booleanState } from "../../state/atom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setIsLogin = useSetRecoilState(booleanState("isLogin"));
    const history = useHistory();

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // ログイン時にCSRFトークンを初期化
            await axios.get("/sanctum/csrf-cookie");
            try {
                const res = await axios.post("/api/login", {
                    email,
                    password,
                });
                if (res.data.result) {
                    console.log("login:ログイン成功");
                    setIsLogin(true);
                    history.push({ pathname: "/home" });
                } else {
                    console.log("login:ログイン失敗");
                    console.log(res.data.message);
                }
            } catch (err) {
                console.log("login:接続に失敗しました");
                console.log(err);
            }
        } catch (error) {
            console.log("login:CSRFトークンの初期化に失敗しました");
            console.log(error);
        }
    };

    return (
        <SComponentContainer>
            <h1>ログイン</h1>
            <h2>
                お試しで利用したい人はメールアドレスfrote@frote.com、パスワードfroteでログイン可能です
            </h2>
            <Card>
                <form onSubmit={login}>
                    <STextField
                        name="email"
                        type="email"
                        label="メールアドレス"
                        onChange={(e) => setEmail(e.target.value)}
                        helperText={true && "メールアドレスを入力してください"}
                        variant="filled"
                        fullWidth
                        margin="normal"
                    />
                    <STextField
                        name="password"
                        type="password"
                        label="パスワード"
                        onChange={(e) => setPassword(e.target.value)}
                        helperText={true && "パスワードを入力してください"}
                        variant="filled"
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" color="default" variant="contained">
                        Login
                    </Button>
                </form>
            </Card>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 80vw;
`;

const STextField = styled(TextField)`
    background-color: white;
    color: black;
    .MuiInputLabel-root {
        background-color: skyblue;
        ::placeholder {
            color: red;
        }
    }
`;
