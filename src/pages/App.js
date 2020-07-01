import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Create from "./Create";

import Header from "../components/Header";
import Thanks from "./Thanks";
import TopPage from "./TopPage";
import NumSearch from "./NumSearch";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <TopPage />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>

          <Route exact path="/numsearch">
            <NumSearch />
          </Route>
          <Route exact path="/thanks">
            <Thanks />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
