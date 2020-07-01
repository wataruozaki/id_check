import React from "react";
import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  return (
    <AppBar position="static">
      <Grid container>
        <Grid item xs>
          <Toolbar>
            <Button
              // className={classes.button}
              variant="contained"
              color="default"
              onClick={() => {
                history.push("/");
              }}
            >
              Topへ戻る
            </Button>
          </Toolbar>
        </Grid>
        <Grid item xs={6}>
          <Toolbar>
            <h2>ID チェック用特設フォーム</h2>
          </Toolbar>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </AppBar>
  );
}
