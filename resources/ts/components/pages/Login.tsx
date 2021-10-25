import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import { DefaultTextField } from "../atoms/form/DefaultTextField";
import { FormCard } from "../atoms/form/FormCard";
import { ActionButton } from "../atoms/button/ActionButton";
import { SText, STitle } from "../atoms/style/TextStyle";

import { booleanState } from "../../state/atom";
import { errorMessages } from "../../assets/data/errorMessages";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const setIsLogin = useSetRecoilState(booleanState("isLogin"));
    const history = useHistory();

    const validateLogin = () => {
        if (email.length === 0) setEmailError(errorMessages.email.blank);
        else if (email.length > 30)
            setEmailError(errorMessages.email.maxLength);
        else setEmailError("");

        if (password.length === 0)
            setPasswordError(errorMessages.password.blank);
        else if (password.length > 30)
            setPasswordError(errorMessages.password.maxLength);
        else if (password.length < 8)
            setPasswordError(errorMessages.password.minLength);
        else setPasswordError("");
    };

    const checkIsSuccess = () => {
        if (emailError === "" && passwordError === "") return true;
        else return false;
    };

    useEffect(() => validateLogin(), [email, password]);

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checkIsSuccess()) {
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
        } else {
            console.log("login;入力に誤りがあります");
        }
    };

    return (
        <SComponentContainer>
            <STitle>ログイン</STitle>
            <SText>
                お試しで利用したい人はメールアドレスfrote@frote、パスワードfrotefroteでログイン可能です
            </SText>
            <FormCard>
                <form onSubmit={login}>
                    <DefaultTextField
                        name="email"
                        type="email"
                        label="メールアドレス"
                        onChange={(e) => setEmail(e.target.value)}
                        error={Boolean(emailError)}
                        helperText={emailError}
                    />
                    <DefaultTextField
                        name="password"
                        type="password"
                        label="パスワード"
                        onChange={(e) => setPassword(e.target.value)}
                        error={Boolean(passwordError)}
                        helperText={passwordError}
                    />
                    <ActionButton type="submit">Login</ActionButton>
                </form>
            </FormCard>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 80vw;
`;
