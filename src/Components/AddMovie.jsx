import { Typography, Divider, TextField, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postMovieData } from "./Dashboard/DashboardRedux/action";

export const AddMovie = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const avatar = "http://dummyimage.com/145x100.png/5fa2dd/ffffff";

  const isLoading = useSelector((state) => state.movie.isLoading);
  const isError = useSelector((state) => state.movie.isError);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postMovieData({ name, avatar, year, genre }));
    history.push("/dashboard");
  };

  return isLoading ? (
    <h4>Loading...</h4>
  ) : (
    <>
      <div style={{ textAlign: "center" }}>
        <br />
        <form onSubmit={handleSubmit}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Enter Movie name"
            variant="outlined"
          />
          <TextField
            value={year}
            onChange={(e) => setYear(e.target.value)}
            label="Enter Movie year"
            variant="outlined"
          />
          <TextField
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            label="Enter Movie genre"
            variant="outlined"
          />

          <br />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onSubmit={handleSubmit}
          >
            Submit
          </Button>
        </form>
        <br />
      </div>
    </>
  );
};
