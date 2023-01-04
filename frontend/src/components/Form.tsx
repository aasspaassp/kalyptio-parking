import { Button, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput"
import RadioInput from "./RadioInput";
import InputSwitch from "./SwitchInput";
import { Parking } from "../types";

const Form = () => {
  const { handleSubmit, reset, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    
    <Paper
    style={{
      display: "grid",
      gridRowGap: "20px",
      padding: "20px",
      margin: "10px 300px",
    }}
    >
      <TextInput
        name={"address"}
        control={control}
        label={"Address:"}
      />
      <RadioInput
      name={"price"}
      control={control}
      label={"Price:"}
      />
      <InputSwitch
       name={"type"}
       control={control}
       label={"Type:"}
       />
       <TextInput
        name={"image"}
        control={control}
        label={"Image link:"}
      />
      <TextInput
        name={"description"}
        control={control}
        label={"Description:"}
      />
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      <Button onClick={() => reset()} variant={"outlined"}>Reset</Button>
      </Paper>
    
  );
};


export default Form;