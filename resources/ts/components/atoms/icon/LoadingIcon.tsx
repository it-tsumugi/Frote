import { CircularProgress } from "@material-ui/core";
import { VFC } from "react";

export const LoadingIcon: VFC = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <CircularProgress style={{ color: "#fff" }} />
        </div>
    );
};
