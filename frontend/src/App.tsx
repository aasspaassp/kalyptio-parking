import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import TextInput from "./components/TextInput"
import RadioInput from "./components/RadioInput";
import { Parking } from "./types";

const App = () => {
  const { handleSubmit, reset, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form>
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
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      <Button onClick={() => reset()} variant={"outlined"}>Reset</Button>
    </form>
  );
};


export default App