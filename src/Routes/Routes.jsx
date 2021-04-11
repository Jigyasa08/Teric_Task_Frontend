import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import { Register } from "../Components/Register/Register";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Register />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />

        <Route render={() => <h4>Page not found</h4>} />
      </Switch>
    </>
  );
}

export { Routes };
