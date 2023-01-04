import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const options = [
  {
    label: "Affordable",
    value: "A"
  },
  {
    label: "Average",
    value: "B"
  },
  {
    label: "Expensive",
    value: "C"
  }

]

const RadioInput: React.FC<FormInputProps> = ({name, control, label}) => {

  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
        key={singleOption.value}
      />
    ));
  };


  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <RadioGroup value={value} onChange={onChange}>
          {generateRadioOptions()}
        </RadioGroup>
      )}
      />
    </FormControl>
  );
}

export default RadioInput