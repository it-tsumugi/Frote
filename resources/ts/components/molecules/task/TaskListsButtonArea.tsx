import { VFC } from "react";

import { NavButton } from "../../atoms/button/NavButton";

import { path } from "../../../assets/data/path";

export const TaskListsButtonArea: VFC = () => {
    return (
        <>
            <NavButton to={path.addTask}>タスクリストの追加</NavButton>
            <NavButton to={path.group}>グループの編集</NavButton>
        </>
    );
};
