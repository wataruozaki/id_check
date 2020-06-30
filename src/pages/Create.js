import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  TextField,
  Button,
  makeStyles,
  Grid,
  Paper,
  Modal,
} from "@material-ui/core";
import firebase, { db } from "../firebase";

const useStyles = makeStyles(() => ({
  paper: {
    maxWidth: "500px;",
    margin: "50px auto",
    padding: "30px",
  },
  nameField: {
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
}));

const Create = () => {
  const { register, handleSubmit, errors } = useForm();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postCode, setPostCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [bodyTemp, setBodyTemp] = useState("");
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const unCreatable =
    lastName === "" ||
    firstName === "" ||
    phoneNumber === "" ||
    postCode === "" ||
    address1 === "" ||
    address2 === "";
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (e) => {
    e.error ? setOpen(false) : setOpen(true);
  };

  const handleSubmitValue = () => {
    const docId = db.collection("client").doc().id;
    db.collection("client")
      .doc(docId)
      .set({
        docId,
        name: lastName + " " + firstName,
        phoneNumber,
        postCode,
        bodyTemp,
        address: address1 + address2,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    history.push("/thanks");
  };

  return (
    <>
      <div className={classes.root}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Paper className={classes.paper} elevation={3}>
            <h3>新規作成</h3>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="姓"
                  name="lastName"
                  type="text"
                  inputRef={register({
                    required: "必須項目です",
                    maxLength: {
                      value: 10,
                      message: "入力できる文字数を超えています",
                    },
                    pattern: {
                      value: /[^0-9]$/,
                      message: "文字を入力してください",
                    },
                  })}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName && errors.lastName.message}
                  className={classes.nameField}
                  variant="outlined"
                  id="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className={classes.nameField}
                  label="名"
                  name="firstName"
                  variant="outlined"
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  inputRef={register({
                    required: "必須項目です",
                    maxLength: {
                      value: 10,
                      message: "入力できる文字数を超えています",
                    },
                    pattern: {
                      value: /[^0-9]$/,
                      message: "文字を入力してください",
                    },
                  })}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName && errors.firstName.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.nameField}
                  label="電話番号"
                  name="phoneNumber"
                  type="number"
                  variant="outlined"
                  id="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  inputRef={register({
                    required: "必須項目です",
                    maxLength: {
                      value: 15,
                      message: "入力できる文字数を超えています",
                    },
                    pattern: {
                      value: /[0-9]$/,
                      message: "数字を入力してください",
                    },
                  })}
                  error={Boolean(errors.phoneNumber)}
                  helperText={errors.phoneNumber && errors.phoneNumber.message}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  className={classes.nameField}
                  label="〒"
                  name="postCode"
                  id="postCode"
                  variant="outlined"
                  onChange={(e) => setPostCode(e.target.value)}
                  inputRef={register({
                    required: "必須項目です",
                    maxLength: {
                      value: 7,
                      message: "入力できる文字数を超えています",
                    },
                    pattern: {
                      value: /[0-9]$/,
                      message: "数字を入力してください",
                    },
                  })}
                  error={Boolean(errors.postCode)}
                  helperText={errors.postCode && errors.postCode.message}
                />
              </Grid>

              <Grid item xs={6}>
                <span>＊郵便番号を入れると住所を自動検索します。</span>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="addres1"
                  className={classes.nameField}
                  variant="outlined"
                  onChange={(e) => setAddress1(e.target.value)}
                  inputRef={register({
                    required: "必須項目です",
                  })}
                  error={Boolean(errors.address1)}
                  helperText={errors.address1 && errors.address1.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="addres2"
                  className={classes.nameField}
                  variant="outlined"
                  onChange={(e) => setAddress2(e.target.value)}
                  inputRef={register({
                    required: "必須項目です",
                  })}
                  error={Boolean(errors.address2)}
                  helperText={errors.address2 && errors.address2.message}
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
                onClose={handleClose}
                closeAfterTransition
              >
                <Paper className={classes.modalPaper}>
                  <h3>体温を記入してください</h3>

                  <TextField
                    className={classes.modalText}
                    label="体温"
                    variant="outlined"
                    name="bodyTemp"
                    onChange={(e) => setBodyTemp(e.target.value)}
                  />

                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleSubmitValue}
                  >
                    送信
                  </Button>
                </Paper>
              </Modal>
            </Grid>
          </Paper>
        </form>
      </div>
    </>
  );
};

export default Create;
