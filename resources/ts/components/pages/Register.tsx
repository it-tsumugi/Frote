import { useEffect, useState, VFC } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router";
import axios from "axios";

import { Card, TextField } from "@material-ui/core";

import { SubmitButton } from "../atoms/button/SubmitButton";

import { eventType } from "../../assets/type/otherType";
import { path } from "../../assets/data/path";

type formType = {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export const Register: VFC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory();
    const {
        watch,
        control,
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<formType>();

    useEffect(() => {
        setEmail(watch("email"));
    }, [watch("email")]);

    useEffect(() => {
        setPassword(watch("password"));
    }, [watch("password")]);

    useEffect(() => {
        setName(watch("userName"));
    }, [watch("userName")]);

    useEffect(() => {
        setConfirmPassword(watch("confirmPassword"));
    }, [watch("confirmPassword")]);

    const registerUserInfo: SubmitHandler<eventType> = async (props) => {
        const { e } = props;
        e.preventDefault();
        if (password === confirmPassword) {
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
            window.alert("パスワードと確認用パスワードが一致しません");
        }
    };

    return (
        <>
            <h1>登録</h1>
            <Card>
                <form onSubmit={(e) => handleSubmit(registerUserInfo({ e }))}>
                    <STextField
                        label="メールアドレス"
                        type="email"
                        variant="filled"
                        fullWidth
                        margin="normal"
                        {...register("email", { required: true })}
                        error={Boolean(errors.email)}
                        helperText={
                            errors.email && "メールアドレスを入力してください"
                        }
                    />
                    <STextField
                        label="ユーザー名"
                        type="text"
                        variant="filled"
                        fullWidth
                        margin="normal"
                        {...register("userName", { required: true })}
                        error={Boolean(errors.userName)}
                        helperText={
                            errors.userName && "ユーザー名を入力してください"
                        }
                    />
                    <STextField
                        variant="filled"
                        label="パスワード"
                        type="password"
                        fullWidth
                        margin="normal"
                        {...register("password", { required: true })}
                        error={Boolean(errors.password)}
                        helperText={
                            errors.password && "パスワードを入力してください"
                        }
                    />
                    <span style={{ margin: "20px" }}>
                        確認用にもう一度パスワードを入力してください
                    </span>
                    <STextField
                        variant="filled"
                        label="確認用パスワード"
                        type="password"
                        fullWidth
                        margin="normal"
                        {...register("confirmPassword", { required: true })}
                        error={Boolean(errors.confirmPassword)}
                        helperText={
                            errors.password &&
                            "確認用パスワードを入力してください"
                        }
                    />
                    <SubmitButton>登録</SubmitButton>
                </form>
            </Card>
        </>
    );
};

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
