import { Modal, Typography, Button, Box, TextField } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalComponent() {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TextField
        label="title"
        onChange={(event) => setInput1(event.target.value)}
      ></TextField>
      <TextField
        label="text"
        onChange={(event) => setInput2(event.target.value)}
      ></TextField>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {input1}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {input2}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
