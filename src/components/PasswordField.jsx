import TextField from '@mui/material/TextField';

import { useState } from 'react';
// import { IconButton, InputAdornment } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

const PasswordField = (props) => {
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    props?.onChange?.(id, value);
  }
  return (
    <TextField
      variant="outlined"
      autoComplete="off"
      id={props.id}
      type={show ? "text" : "password"}
      autoFocus={props?.autoFocus}
      value={props.value}
      onChange={handleChange}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={() => setShow(!show)}>
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      helperText={props.helperText}
      error={props.error}
    />
  )
}
PasswordField.requiredProps = ["id", "value"];
export default PasswordField;