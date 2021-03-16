import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';

import "@fortawesome/fontawesome-free/css/all.min.css";

import Login from "../src/views/Login.js";
import SignUp from "../src/views/SignUp.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={Login} />
      {/* <Redirect from="/" to="/signin" /> */}
      <Route path="/signup" component={SignUp} />
      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
