import React from "react";
import { Paper, TextField, Grid, Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  paper: {
    maxWidth: "500px;",
    margin: "50px auto",
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
}));

export default function Number() {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              name="phoneNumber"
              variant="outlined"
              id="phoneNumber"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="large"
            >
              体温を測る
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
