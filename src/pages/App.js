import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Create from "./Create";

import Header from "../components/Header";
import Thanks from "./Thanks";
import TopPage from "./TopPage";
import NumSearch from "./NumSearch";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/numsearch" component={NumSearch} />
        <Route exact path="/thanks" component={Thanks} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
