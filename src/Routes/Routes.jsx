import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import { Register } from "../Components/Register/Register";
import { useSelector } from "react-redux";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import { AddMovie } from "../Components/AddMovie";
import { EditMovie } from "../Components/EditMovie";

function Routes() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Register />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/addMovie"
          render={(props) => <AddMovie {...props} />}
        />
        <Route
          exact
          path="/editMovie/:id"
          render={(props) => <EditMovie {...props} />}
        />
        {isAuth ? (
          <Route
            exact
            path="/dashboard"
            render={(props) => <Dashboard {...props} />}
          />
        ) : (
          <h3>Login First</h3>
        )}
        <Route render={() => <h4>Page not found</h4>} />
      </Switch>
    </>
  );
}

export { Routes };
