import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  errMsg: "",
  isRegistered: false,
};

export const registerReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isRegistered: true,
      };
    }

    case REGISTER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isRegistered: false,
        isError: true,
        errMsg: payload,
      };
    }

    default:
      return state;
  }
};
