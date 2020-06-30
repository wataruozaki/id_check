import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <h2>Title</h2>
      </Toolbar>
    </AppBar>
  );
}
