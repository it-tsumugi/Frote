import { VFC } from "react";

import Twitter from "@material-ui/icons/Twitter";

import { SBaseIcon } from "./SBaseIcon";

import { iconType } from "../../../assets/type/otherType";

export const TwitterIcon: VFC<iconType> = (props) => {
    const { url } = props;
    return (
        <SBaseIcon>
            <Twitter onClick={() => window.open(url)} />
        </SBaseIcon>
    );
};
