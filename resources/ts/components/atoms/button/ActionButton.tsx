import { VFC } from "react";

import { Button } from "@material-ui/core";

type propsType = {
    children?: string;
    onClick?: () => any;
    style?: React.CSSProperties | undefined;
};

export const ActionButton: VFC<propsType> = (props) => {
    const { children, onClick, style } = props;
    return (
        <Button
            type="button"
            color="default"
            variant="contained"
            style={style}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};
