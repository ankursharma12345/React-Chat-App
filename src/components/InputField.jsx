import TextField from "@mui/material/TextField";
import { useState } from "react";

const InputField = (props) => {
    const [data, setData] = useState({});
    const handleChange = (e) => {
        const { id, value } = e.target;
        setData((prev) => ({
            ...prev,
            [id]: value
        }))
        props?.onChange(id, value);
    }
    return (
        <TextField
            variant="outlined"
            fullWidth
            autoComplete="off"
            id={props.id}
            autoFocus={props?.autoFocus}
            // value={props.value}
            value={data?.value}
            onChange={handleChange}
            helperText={props.helperText}
            error={props.error}
        />
    )
}
InputField.requiredProps = ["id", "value"];
export default InputField;