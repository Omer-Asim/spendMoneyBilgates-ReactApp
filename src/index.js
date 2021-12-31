import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <Homepage />
    </Route>
  </Router>,
  document.getElementById("root")
);
