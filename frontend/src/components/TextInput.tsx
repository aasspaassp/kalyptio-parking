import TextField from '@mui/material/TextField';
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const TextInput = ({name , control, label}: FormInputProps) => {

  return (
  
    <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <TextField
      id="standard-helperText"
      onChange={onChange}
      value={value || ""} 
      label={label}
      variant="standard"
    />
    )}
  />
    
  );
};


export default TextInput