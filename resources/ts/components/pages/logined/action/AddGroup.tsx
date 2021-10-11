import { useEffect, useState, VFC } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@material-ui/core";

type eventType = {
    e: React.FormEvent<HTMLFormElement>;
};

export const AddGroup: VFC = () => {
    const history = useHistory();
    const [group, setGroup] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    useEffect(() => {
        setGroup(watch("group"));
    }, [watch("group")]);

    const sendGroup: SubmitHandler<eventType> = async ({ e }) => {
        e.preventDefault();

        try {
            const res = await axios.post("/api/add/group", {
                group,
            });
            if (res.data.result) {
                console.log("AddGroup:グループの追加に成功");
                history.push({ pathname: "/home" });
                window.alert("グループを追加しました");
            } else {
                console.log("AddGroup:グループの追加に失敗");
                window.alert("既に同名のグループが存在します");
            }
        } catch (err) {
            console.log("AddGroup:接続に失敗");
            console.log(err);
        }
    };
    return (
        <SComponentContainer>
            <form onSubmit={(e) => handleSubmit(sendGroup({ e }))}>
                <h3>追加するグループを入力してください</h3>
                <input
                    type="text"
                    {...register("group", { required: true })}
                    placeholder="グループ名"
                />
                {errors.subject && "件名を入力してください"}
                <Button type="submit" color="default" variant="contained">
                    送信
                </Button>
            </form>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div``;
