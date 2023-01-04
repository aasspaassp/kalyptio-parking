import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Controller  } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const InputSwitch: React.FC<FormInputProps> = ({name, control, label}) => {
  return (
    <Controller
    defaultValue= {true}
    name={name}
    control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) =>  (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Private" onChange={onChange} />

    </FormGroup>
      )
     }
    />
  );
}

export default InputSwitch