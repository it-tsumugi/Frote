import { TextField } from "@material-ui/core";
import { VFC } from "react";

type propsType = {
    name?: string;
    label?: React.ReactNode;
    type?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    error?: boolean;
    helperText?: React.ReactNode;
    value?: any;
};

export const DefaultTextField: VFC<propsType> = (props) => {
    const { label, type, onChange, error, helperText, name, value } = props;
    return (
        <TextField
            value={value}
            name={name}
            label={label}
            type={type}
            onChange={onChange}
            error={error}
            helperText={helperText}
            inputProps={{
                style: { backgroundColor: "white" },
            }}
            InputLabelProps={{ style: { backgroundColor: "white" } }}
            variant="filled"
            fullWidth
            margin="normal"
        />
    );
};
