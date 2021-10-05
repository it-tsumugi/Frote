import { VFC } from "react";
import { allTaskLists } from "../../../assets/data/allTaskLists";
import { CardList } from "../../organisms/CardList";

export const Quadrant: VFC = () => {
    return (
        <>
            <CardList data={allTaskLists} />
        </>
    );
};
