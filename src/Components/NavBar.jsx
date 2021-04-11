import { AppBar, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        color="secondary"
        //   style={{ backgroundColor: "red" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "20px",
          }}
        >
          <NavLink
            to="/dashboard"
            activeStyle={{ color: "black" }}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            <Typography variant="h5"> Dashboard</Typography>
          </NavLink>
          <NavLink
            to="/login"
            activeStyle={{ color: "black" }}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            <Typography variant="h5">Login</Typography>
          </NavLink>
        </div>
      </AppBar>
    </div>
  );
};
