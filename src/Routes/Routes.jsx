import { Paper } from "@material-ui/core";
import React from "react";
import { Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <>
      <Switch>
        <Route render={() => <h4>Page not found</h4>} />
      </Switch>
    </>
  );
}

export { Routes };
