import React, { useState } from "react";
import { loginOperatorData } from "./LoginRedux/action";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { Button, TextField, Paper } from "@material-ui/core";

export const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isError = useSelector((state) => state.auth.isError);

  const handleLogin = () => {
    dispatch(loginOperatorData({ phone, password }));
  };

  console.log(isAuth);
  return isLoading ? (
    <h4>Loading...</h4>
  ) : (
    <Paper
      elevation={5}
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "30px",
        marginTop: "100px",
      }}
    >
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Enter phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <br />
      <TextField
        type="password"
        variant="outlined"
        label="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" onClick={handleLogin} color="secondary">
        Login
      </Button>
      <br />
      <br />

      {isAuth && (
        <>
          <h5>Login Successful</h5>
          <Redirect to="/dashboard" />
        </>
      )}

      {isError && <h5>Login Error, Please try again</h5>}
    </Paper>
  );
};
