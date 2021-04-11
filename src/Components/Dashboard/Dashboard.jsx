import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getmovie,
  getMovieData,
  deleteMovieData,
  editmovieData,
  postmovieData,
} from "./DashboardRedux/action";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  Paper,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
export const Dashboard = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const movies = useSelector((state) => state.movie.moviesData);
  const isLoading = useSelector((state) => state.movie.isLoading);
  const isError = useSelector((state) => state.movie.isError);
  const handleDelete = (id) => {
    dispatch(deleteMovieData(id));
  };
  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  const handleClick = (id) => {
    const { url } = props.match;
    history.push(`${url}/${id}`);
  };

  const handlePost = () => {
    history.push("/addMovie");
  };
  const handleEdit = (id) => {
    history.push(`/editMovie/${id}`);
  };

  console.log(movies);
  return isAuth ? (
    isLoading ? (
      <h3>Loading...</h3>
    ) : (
      <>
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%", height: "520px" }}
            src="https://cdn57.androidauthority.net/wp-content/uploads/2019/06/Tubi-best-movie-apps-for-Android.jpg"
          />
        </div>
        <Button color="secondary" variant="contained" onClick={handlePost}>
          Add any Movie
        </Button>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Poster</StyledTableCell>
                <StyledTableCell>Movie Name</StyledTableCell>
                <StyledTableCell>Year of release</StyledTableCell>
                <StyledTableCell>Genre</StyledTableCell>
                <StyledTableCell>Edit</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies &&
                movies.map((row) => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell onClick={() => handleClick(row._id)}>
                      <img src={row.avatar} width="200px" />
                    </StyledTableCell>
                    <StyledTableCell onClick={() => handleClick(row._id)}>
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell>{row.year}</StyledTableCell>
                    <StyledTableCell>{row.genre}</StyledTableCell>

                    <StyledTableCell onClick={() => handleEdit(row._id)}>
                      Edit
                    </StyledTableCell>
                    <StyledTableCell onClick={() => handleDelete(row._id)}>
                      Delete
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {isError && <h5>Oops, Something went wrong!</h5>}
      </>
    )
  ) : (
    <h5>Please Login</h5>
  );
};
