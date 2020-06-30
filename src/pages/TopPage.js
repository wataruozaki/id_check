import React from "react";
import { useHistory } from "react-router-dom";
import { Paper, Grid, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paper: {
    maxWidth: "500px;",
    margin: "50px auto",
    padding: "80px",
  },
  button: {
    width: "100%",
  },
}));

const TopPage = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="large"
              onClick={() => history.push("/create")}
            >
              新規作成する
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              size="large"
              onClick={() => history.push("/numsearch")}
            >
              電話番号を入力する
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default TopPage;
