import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "./Dashboard/DashboardRedux/action";

const useStyles = makeStyles({
  root: {
    margin: "120px auto",
    maxWidth: 500,
    backgroundColor: "#957DAD",
    color: "white",
  },
  media: {
    margin: "20px auto",
    height: 150,
    width: 200,
  },
});

export const ViewMovie = (props) => {
  const classes = useStyles();

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

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={movie.avatar} />
        <CardContent>
          <Typography variant="h4">{movie.name}</Typography>
          <br />
          <Divider />
          <br />
          <Typography variant="h6">Movie Details</Typography>

          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "700", color: "white" }}>
                  Year of release
                </TableCell>
                <TableCell style={{ fontWeight: "700", color: "white" }}>
                  Genre
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ fontWeight: "300", color: "white" }}
                >
                  {movie.year}
                </TableCell>
                <TableCell style={{ fontWeight: "300", color: "white" }}>
                  {movie.genre}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </CardActionArea>
      <Divider />
    </Card>
  );
};
