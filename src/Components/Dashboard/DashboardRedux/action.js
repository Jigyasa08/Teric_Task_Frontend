import {
  MOVIE_GET_REQUEST,
  MOVIE_GET_SUCCESS,
  MOVIE_GET_FAILURE,
  MOVIE_DATA_GET_REQUEST,
  MOVIE_DATA_GET_SUCCESS,
  MOVIE_DATA_GET_FAILURE,
  MOVIE_DATA_POST_REQUEST,
  MOVIE_DATA_POST_SUCCESS,
  MOVIE_DATA_POST_FAILURE,
  MOVIE_DATA_EDIT_REQUEST,
  MOVIE_DATA_EDIT_SUCCESS,
  MOVIE_DATA_EDIT_FAILURE,
  MOVIE_DATA_DELETE_REQUEST,
  MOVIE_DATA_DELETE_SUCCESS,
  MOVIE_DATA_DELETE_FAILURE,
} from "./actionTypes";
import axios from "axios";

// Actions for calling Movie-Get API

export const movieGetRequest = () => {
  return {
    type: MOVIE_GET_REQUEST,
  };
};

export const movieGetSuccess = (payload) => {
  return {
    type: MOVIE_GET_SUCCESS,
    payload: payload,
  };
};

export const movieGetFailure = () => {
  return {
    type: MOVIE_GET_FAILURE,
  };
};

export const getMovie = (id) => (dispatch) => {
  dispatch(movieGetRequest());

  axios({
    method: "GET",
    url: `https://teric-movie-api.herokuapp.com/movie/${id}`,
  })
    .then((res) => {
      dispatch(movieGetSuccess(res.data));
    })
    .catch((err) => dispatch(movieGetFailure(err)));
};

// Actions for calling Movie Data-Get API

export const movieDataGetRequest = () => {
  return {
    type: MOVIE_DATA_GET_REQUEST,
  };
};

export const movieDataGetSuccess = (payload) => {
  return {
    type: MOVIE_DATA_GET_SUCCESS,
    payload: payload,
  };
};

export const movieDataGetFailure = () => {
  return {
    type: MOVIE_DATA_GET_FAILURE,
  };
};

export const getMovieData = () => (dispatch) => {
  dispatch(movieDataGetRequest());

  axios({
    method: "GET",
    url: `https://teric-movie-api.herokuapp.com/movie/`,
  })
    .then((res) => {
      dispatch(movieDataGetSuccess(res.data));
    })
    .catch((err) => dispatch(movieDataGetFailure(err)));
};

// Actions for calling Movie post API

export const movieDataPostRequest = () => {
  return {
    type: MOVIE_DATA_POST_REQUEST,
  };
};

export const movieDataPostSuccess = (payload) => {
  return {
    type: MOVIE_DATA_POST_SUCCESS,
    payload: payload,
  };
};

export const movieDataPostFailure = () => {
  return {
    type: MOVIE_DATA_POST_FAILURE,
  };
};

export const postMovieData = ({ avatar, name, genre, year }) => (dispatch) => {
  dispatch(movieDataPostRequest());

  axios({
    method: "POST",
    url: `https://teric-movie-api.herokuapp.com/movie/`,
    data: {
      avatar,
      name,
      genre,
      year,
    },
  })
    .then((res) => {
      dispatch(movieDataPostSuccess(res.data));
    })
    .catch((err) => dispatch(movieDataPostFailure(err)));
};

// Actions for calling Movie edit API

export const movieDataEditRequest = () => {
  return {
    type: MOVIE_DATA_EDIT_REQUEST,
  };
};

export const movieDataEditSuccess = (payload) => {
  return {
    type: MOVIE_DATA_EDIT_SUCCESS,
    payload: payload,
  };
};

export const movieDataEditFailure = () => {
  return {
    type: MOVIE_DATA_EDIT_FAILURE,
  };
};

export const editMovieData = (id) => (dispatch) => {
  dispatch(movieDataEditRequest());

  axios({
    method: "PUT",
    url: `https://teric-movie-api.herokuapp.com/movie/${id}`,
  })
    .then((res) => {
      dispatch(movieDataEditSuccess(res.data));
    })
    .catch((err) => dispatch(movieDataEditFailure(err)));
};

// Actions for calling Movie delete API

export const movieDataDeleteRequest = () => {
  return {
    type: MOVIE_DATA_DELETE_REQUEST,
  };
};

export const movieDataDeleteSuccess = (payload) => {
  return {
    type: MOVIE_DATA_DELETE_SUCCESS,
    payload: payload,
  };
};

export const movieDataDeleteFailure = () => {
  return {
    type: MOVIE_DATA_DELETE_FAILURE,
  };
};

export const deleteMovieData = (id) => (dispatch) => {
  dispatch(movieDataDeleteRequest());

  axios({
    method: "DELETE",
    url: `https://teric-movie-api.herokuapp.com/movie/${id}`,
  })
    .then((res) => {
      dispatch(movieDataDeleteSuccess(res.data));
    })
    .catch((err) => dispatch(movieDataDeleteFailure(err)));
};
