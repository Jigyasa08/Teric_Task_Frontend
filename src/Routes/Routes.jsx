import React from "react";
import { Switch, Route } from "react-router-dom";
import { Register } from "../Components/Register/Register";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Register />} />

        <Route render={() => <h4>Page not found</h4>} />
      </Switch>
    </>
  );
}

export { Routes };
