import { AppBar, Typography } from "@material-ui/core";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "./Login/LoginRedux/action";

export const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleLogin = () => {
    history.push("/login");
  };
  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/login");
  };
  return (
    <div style={{ marginBottom: "75px" }}>
      <AppBar position="fixed" color="secondary">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "20px",
          }}
        >
          <NavLink
            to="/dashboard"
            activeStyle={{ color: "#D6E3B5" }}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            <Typography variant="h5"> Dashboard</Typography>
          </NavLink>

          {isAuth ? (
            <Typography onClick={handleLogout} variant="h5">
              Logout
            </Typography>
          ) : (
            <NavLink
              to="/login"
              activeStyle={{ color: "#D6E3B5" }}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              <Typography onClick={handleLogin} variant="h5">
                Login
              </Typography>
            </NavLink>
          )}
        </div>
      </AppBar>
    </div>
  );
};
