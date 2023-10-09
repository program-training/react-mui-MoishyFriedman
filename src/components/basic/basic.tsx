import {
  TextField,
  Button,
  Typography,
  Radio,
  Checkbox,
  Select,
} from "@mui/material";
import { useState } from "react";

export default function Basic() {
  const [input, setInput] = useState<string>("");
  const [typography, setTypography] = useState<string>("");
  return (
    <>
      <Typography variant="h1">{typography}</Typography>
      <Button onClick={() => setTypography(input)}>click me!</Button>
      <TextField
        label="head title"
        sx={{ backgroundColor: "red" }}
        onChange={(event) => setInput(event.target.value)}
      ></TextField>
      <Radio
        sx={{
          "& .MuiSvgIcon-root": {
            width: "45px",
            height: "45px",
          },
        }}
      ></Radio>
      <Checkbox
        sx={{
          "&.Mui-checked": {
            color: "red",
          },
        }}
      ></Checkbox>
      <Select sx={{ backgroundColor: "salmon" }}></Select>
    </>
  );
}
