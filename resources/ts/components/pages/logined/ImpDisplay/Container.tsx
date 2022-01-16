import { VFC } from "react";
import { useRecoilValueLoadable } from "recoil";
import { impTaskListsState } from "../../../../state/atom";
import { LoadingIcon } from "../../../atoms/icon/LoadingIcon";
import { PImpDisplay } from "./Presenter";

export const ImpDisplay: VFC = () => {
    const impTaskLists = useRecoilValueLoadable(impTaskListsState);

    switch (impTaskLists.state) {
        case "hasValue":
            return <PImpDisplay impTaskLists={impTaskLists.contents} />;
        case "loading":
            return <LoadingIcon />;
        case "hasError":
            throw impTaskLists.contents;
    }
};
