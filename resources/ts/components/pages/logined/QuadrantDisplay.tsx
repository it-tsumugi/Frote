import { VFC } from "react";
import { allTaskLists } from "../../../assets/data/allTaskLists";
import { CardList } from "../../organisms/CardList";

export const QuadrantDisplay: VFC = () => {
    return (
        <>
            <CardList data={allTaskLists} />
        </>
    );
};