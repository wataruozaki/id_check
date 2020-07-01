import React, { useState } from "react";
import {
  Paper,
  TextField,
  Grid,
  Button,
  makeStyles,
  Modal,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles(() => ({
  paper: {
    maxWidth: "500px;",
    margin: "50px auto 20px",
    padding: "30px",
  },

  textField: {
    width: "100%",
  },

  button: {
    width: "100%",
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  modalPaper: {
    background: "#fff",
    padding: "50px",
  },

  modalText: {
    width: "100%",
    marginBottom: "30px",
  },

  goTopContainer: {
    maxWidth: "500px;",
    margin: "0 auto",
  },
}));

export default function Number() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bodyTemp, setSetBodyTemp] = useState("");
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const classes = useStyle();

  const unCreatable = phoneNumber === "";
  const onSubmit = (e) => {
    e.error ? setOpen(false) : setOpen(true);
  };

  const hundleClose = () => {
    setOpen(false);
  };

  const handleSubmitValue = () => {
    history.push("/thanks");
    console.log(bodyTemp);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper className={classes.paper}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                label="電話番号"
                className={classes.textField}
                name="phoneNumber"
                variant="outlined"
                id="phoneNumber"
                inputRef={register({
                  required: "必須事項です",
                  maxLength: {
                    value: 15,
                    message: "文字数超過です",
                  },
                  pattern: {
                    value: /[0-9]$/,
                    message: "数字を入力してください",
                  },
                })}
                error={Boolean(errors.phoneNumber)}
                helperText={errors.phoneNumber && errors.phoneNumber.message}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                size="large"
                disabled={unCreatable}
                type="submit"
              >
                体温を測る
              </Button>
            </Grid>

            <Modal
              className={classes.modal}
              open={open}
              onClose={hundleClose}
              closeAfterTransition
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <Paper className={classes.modalPaper}>
                <TextField
                  label="体温"
                  name="bodyTemp"
                  className={classes.modalText}
                  onChange={(e) => setSetBodyTemp(e.target.value)}
                  variant="outlined"
                  inputRef={register({
                    required: "必須項目です",
                  })}
                />
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleSubmitValue}
                  disabled={unCreatable}
                >
                  送信する
                </Button>
              </Paper>
            </Modal>
          </Grid>
        </Paper>
      </form>
    </div>
  );
}
