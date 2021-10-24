import { useEffect, useState, VFC } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import axios from "axios";

import { DefaultTextField } from "../atoms/form/DefaultTextField";
import { ActionButton } from "../atoms/button/ActionButton";
import { FormCard } from "../atoms/form/FormCard";

import { path } from "../../assets/data/path";
import { errorMessages } from "../../assets/data/errorMessages";

export const Register: VFC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

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

        if (confirmPassword.length === 0)
            setConfirmPasswordError(errorMessages.confirmPassword.blank);
        else if (confirmPassword !== password)
            setConfirmPasswordError(errorMessages.confirmPassword.notMatch);
        else setConfirmPasswordError("");

        if (name.length === 0) setNameError(errorMessages.name.blank);
        else if (name.length > 30) setNameError(errorMessages.name.maxLength);
        else setNameError("");
    };

    const checkIsSuccess = () => {
        if (
            emailError === "" &&
            passwordError === "" &&
            confirmPasswordError === "" &&
            nameError === ""
        )
            return true;
        else return false;
    };

    useEffect(() => {
        validateLogin();
    }, [email, password, name, confirmPassword]);

    const registerUserInfo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checkIsSuccess()) {
            try {
                // ログイン時にCSRFトークンを初期化
                await axios.get("/sanctum/csrf-cookie");
                try {
                    const res = await axios.post("/api/register", {
                        name,
                        email,
                        password,
                    });
                    if (res.data.result) {
                        console.log("registerUserName:登録成功");
                        window.alert(res.data.message);
                        history.push(path.login);
                    } else {
                        console.log("registerUserName:登録失敗");
                        window.alert(res.data.message);
                    }
                } catch (err) {
                    console.log("registerUserName:エラー");
                    console.log(err);
                }
            } catch (error) {
                console.log(
                    "registerUserName:CSRFトークンの初期化に失敗しました"
                );
                console.log(error);
            }
        } else {
            console.log("login:入力形式に問題があります");
        }
    };

    return (
        <>
            <h1>登録</h1>
            <FormCard>
                <form onSubmit={(e) => registerUserInfo(e)}>
                    <DefaultTextField
                        label="ユーザー名"
                        type="text"
                        error={Boolean(nameError)}
                        helperText={nameError}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <DefaultTextField
                        label="メールアドレス"
                        type="email"
                        error={Boolean(emailError)}
                        helperText={emailError}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <DefaultTextField
                        label="パスワード"
                        type="password"
                        error={Boolean(passwordError)}
                        helperText={passwordError}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span style={{ margin: "20px 0" }}>
                        確認用にもう一度パスワードを入力してください
                    </span>
                    <DefaultTextField
                        label="確認用パスワード"
                        type="password"
                        error={Boolean(confirmPasswordError)}
                        helperText={confirmPasswordError}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <ActionButton type="submit">登録</ActionButton>
                </form>
            </FormCard>
        </>
    );
};
