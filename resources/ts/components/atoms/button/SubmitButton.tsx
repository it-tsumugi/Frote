import { VFC } from "react";

import { Button } from "@material-ui/core";

type propsType = {
    children?: string;
    onClick?: () => any;
    style?: React.CSSProperties | undefined;
};

export const SubmitButton: VFC<propsType> = (props) => {
    const { children, onClick, style } = props;
    return (
        <Button
            type="submit"
            color="default"
            variant="contained"
            style={style}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};
