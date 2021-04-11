import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { registerUser } from "./RegisterRedux/action";
import { Button, TextField, Paper } from "@material-ui/core";

export const Register = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const isRegistered = useSelector((state) => state.register.isRegistered);
  const isLoading = useSelector((state) => state.register.isLoading);
  const isError = useSelector((state) => state.register.isError);
  const errorMsg = useSelector((state) => state.register.errMsg);
  const handleSubmit = () => {
    let payload = { phone, password };
    console.log(phone, password);
    dispatch(registerUser(payload));
  };
  const handleLogin = () => {
    history.push("/login");
  };
  console.log(isLoading, isRegistered, errorMsg);
  return isLoading ? (
    <h4>Loading...</h4>
  ) : (
    <>
      <TextField
        variant="outlined"
        label="Enter Phone number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" onClick={handleSubmit} color="secondary">
        Register
      </Button>
      <br />
      <br />
      Already registered ?
      <br />
      <br />
      <Button variant="contained" onClick={handleLogin} color="secondary">
        Go to Login
      </Button>
      <br />
      <br />
      {isRegistered && (
        <>
          <h5>Registration Successful</h5>
          <Redirect to="/login" />
        </>
      )}
      {isError && <h5>User already exists, Go to Login</h5>}
    </>
  );
};
