import { VFC } from "react";

import { Button } from "@material-ui/core";

type propsType = {
    children?: string;
};

export const DummyButton: VFC<propsType> = (props) => {
    const { children } = props;
    return <Button style={{ visibility: "hidden" }}>{children}</Button>;
};
