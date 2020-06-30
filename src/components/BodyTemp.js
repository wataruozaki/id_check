import React, { useState } from "react";
import { Modal, Paper, makeStyles, Backdrop, Fade } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    width: "200px",
  },
}));

function BodyTemp() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.peper}>
          <h1>hi</h1>
        </Paper>
      </Fade>
    </Modal>
  );
}

export default BodyTemp;
