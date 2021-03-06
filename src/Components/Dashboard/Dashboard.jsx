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
import { Pagination } from "../Pagination";

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

  const [currentPage, setCurrentpage] = useState(1);
  const perPage = 10;
  const totalPages = Math.ceil(movies.length / perPage);

  const handleDelete = (id) => {
    dispatch(deleteMovieData(id));
    dispatch(getMovieData());
  };
  useEffect(() => {
    dispatch(getMovieData());
  }, [currentPage]);

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
        <div
          style={{
            padding: "10px",
            backgroundColor: "gainsboro",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginLeft: "40px" }}>
            <Button color="secondary" variant="contained" onClick={handlePost}>
              Add any Movie
            </Button>
          </div>
          <div>
            <Pagination
              handlePage={(page) => setCurrentpage(page)}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
        <div>
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
                  movies
                    .filter(
                      (_, index) =>
                        index >= (currentPage - 1) * perPage &&
                        index < currentPage * perPage
                    )
                    .map((row) => (
                      <StyledTableRow key={row._id}>
                        <StyledTableCell onClick={() => handleClick(row._id)}>
                          <img src={row.avatar} width="200px" />
                        </StyledTableCell>
                        <StyledTableCell
                          style={{
                            fontFamily: "cursive",
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                          onClick={() => handleClick(row._id)}
                        >
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell
                          style={{
                            fontFamily: "cursive",
                            fontSize: "16px",
                          }}
                        >
                          {row.year}
                        </StyledTableCell>
                        <StyledTableCell
                          style={{
                            fontFamily: "cursive",
                            fontSize: "16px",
                          }}
                        >
                          {row.genre}
                        </StyledTableCell>

                        <StyledTableCell onClick={() => handleEdit(row._id)}>
                          <Button
                            style={{
                              fontFamily: "cursive",
                              fontSize: "16px",
                            }}
                            variant="outlined"
                          >
                            Edit
                          </Button>
                        </StyledTableCell>
                        <StyledTableCell onClick={() => handleDelete(row._id)}>
                          <Button
                            style={{
                              fontFamily: "cursive",
                              fontSize: "16px",
                            }}
                            variant="outlined"
                          >
                            Delete
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        {isError && <h5>Oops, Something went wrong!</h5>}
      </>
    )
  ) : (
    <h5>Please Login</h5>
  );
};
