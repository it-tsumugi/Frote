import { VFC } from "react";
import { path } from "../../../assets/data/path";
import { NavButton } from "../../atoms/button/NavButton";
import { GroupList } from "../../organisms/GroupList";

export const Group: VFC = () => {
    return (
        <>
            <GroupList />
            <NavButton to={path.addGroup}>グループの追加</NavButton>
        </>
    );
};
