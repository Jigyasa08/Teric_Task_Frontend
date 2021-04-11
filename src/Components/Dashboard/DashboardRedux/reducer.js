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

const initState = {
  isLoading: false,
  isError: false,
  moviesData: [],
  movie: {},
};

export const movieReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case MOVIE_GET_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case MOVIE_GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        movie: payload,
      };
    }

    case MOVIE_GET_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case MOVIE_DATA_GET_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case MOVIE_DATA_GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        moviesData: payload,
      };
    }

    case MOVIE_DATA_GET_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case MOVIE_DATA_POST_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case MOVIE_DATA_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case MOVIE_DATA_POST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case MOVIE_DATA_EDIT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case MOVIE_DATA_EDIT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case MOVIE_DATA_EDIT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case MOVIE_DATA_DELETE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case MOVIE_DATA_DELETE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case MOVIE_DATA_DELETE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};
