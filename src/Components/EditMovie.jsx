import {
  Typography,
  Divider,
  TextField,
  Button,
  Paper,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  editMovieData,
  getMovie,
  getMovieData,
} from "./Dashboard/DashboardRedux/action";

export const EditMovie = (props) => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(params);
  useEffect(() => {
    dispatch(getMovie(params.id));
  }, []);

  const isLoading = useSelector((state) => state.movie.isLoading);
  const isError = useSelector((state) => state.movie.isError);
  const item = useSelector((state) => state.movie.movie);

  const [movie, setMovie] = useState(item);
  console.log(movie);
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = movie;

    console.log(payload);
    dispatch(editMovieData(params.id, payload));
    dispatch(getMovieData());

    history.push("/dashboard");
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setMovie((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
      <div style={{ textAlign: "center" }}>
        <br />
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <TextField
              value={movie.name}
              name="name"
              onChange={handleChange}
              label="Movie name"
              variant="outlined"
            />
            <TextField
              value={movie.year}
              name="year"
              onChange={handleChange}
              label="Movie year"
              variant="outlined"
            />
            <TextField
              value={movie.genre}
              name="genre"
              onChange={handleChange}
              label="Movie genre"
              variant="outlined"
            />
          </div>

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
    </Paper>
  );
};
