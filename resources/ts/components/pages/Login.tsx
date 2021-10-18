import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "../../providers/AuthProvider";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import styled from "styled-components";
import { Button, Card, InputBase } from "@material-ui/core";

type formType = {
    email: string;
    password: string;
};

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setIsLogin } = useAuthContext();
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

    type eventType = {
        e: React.FormEvent<HTMLFormElement>;
    };

    const login: SubmitHandler<eventType> = async (props) => {
        const { e } = props;
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
                <form
                    // onSubmit={(e) => handleSubmit(login({ e }))}
                    // onSubmit={handleSubmit((data) => alert(data))}
                    onSubmit={(e) => handleSubmit(login({ e }))}
                    id="contact-form"
                >
                    <STextField
                        label="メールアドレス"
                        type="email"
                        variant="filled"
                        fullWidth
                        margin="normal"
                        // inputProps={{
                        //     ...register("email", { required: true }),
                        // }}
                        {...register("email", { required: true })}
                        // inputRef ={register("email", { required: true })}
                        error={Boolean(errors.email)}
                        helperText={
                            errors.email && "メールアドレスを入力してください"
                        }
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <Controller
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        render={(props) => (
                            <STextField
                                id="email"
                                label="メールアドレス"
                                type="email"
                                variant="filled"
                                fullWidth
                                margin="normal"
                                // inputProps={{
                                //     ...register("email", { required: true }),
                                // }}
                                // {...register("email", { required: true })}
                                error={Boolean(errors.email)}
                                helperText={
                                    errors.email &&
                                    "メールアドレスを入力してください"
                                }
                                // onChange={(e) => setEmail(e.target.value)}
                            />
                        )}
                    /> */}
                    <STextField
                        variant="filled"
                        label="パスワード"
                        type="password"
                        fullWidth
                        margin="normal"
                        // inputProps={{
                        //     ...register("password", { required: true }),
                        // }}
                        {...register("password", { required: true })}
                        error={Boolean(errors.password)}
                        helperText={
                            errors.password && "パスワードを入力してください"
                        }
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        render={(props) => (
                            <STextField
                                label="パスワード"
                                type="password"
                                variant="filled"
                                fullWidth
                                margin="normal"
                                // inputProps={{
                                //     ...register("password", { required: true }),
                                // }}
                                // {
                                //     ...register("password", { required: true }),}
                                // {...register("password", { required: true })}
                                error={Boolean(errors.password)}
                                helperText={
                                    errors.password &&
                                    "パスワードを入力してください"
                                }
                                // onChange={(e) => setEmail(e.target.value)}
                            />
                        )}
                    /> */}
                    {/* {console.log(email, password)} */}
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

const SCard = styled.div`
    width: 80;
`;
const SButton = styled(Button)`
    background-color: blue;
    color: white;
`;

const STextField = styled(TextField)`
    background-color: white;
    color: black;
    .MuiInputLabel-root {
        background-color: skyblue;
        ::placeholder {
            color: red;
        }
        /* color: black; */
    }
`;
