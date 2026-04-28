import { TextField } from "@mui/material";

const InputField = (props) => {
    return (
        <TextField
            variant="outlined"
            id={props.id}
            value={props.value}
            fullWidth
        />
    )
}
InputField.requiredProps = ["id", "value"];
export default InputField;