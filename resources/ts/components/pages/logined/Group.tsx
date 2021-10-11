import { VFC } from "react";
import { path } from "../../../assets/data/path";
import { NavButton } from "../../atoms/button/NavButton";

export const Group: VFC = () => {
    return (
        <>
            <h1>groupページです</h1>
            <NavButton to={path.addGroup}>グループの追加</NavButton>
            <NavButton to={path.deleteGroup}>グループの削除</NavButton>
            <NavButton to={path.editGroup}>グループの編集</NavButton>
        </>
    );
};
