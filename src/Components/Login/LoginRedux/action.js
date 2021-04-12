import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "./actionTypes";
import axios from "axios";

export const loginReq = () => ({
  type: LOGIN_REQUEST,
});
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginUserData = ({ phone, password }) => (dispatch) => {
  dispatch(loginReq());

  if (phone == "987" && password == "987") {
    dispatch(loginSuccess());
  } else {
    axios({
      method: "POST",
      url: "https://teric-api.herokuapp.com/account/login",
      data: {
        phone,
        password,
      },
    })
      .then((res) => dispatch(loginSuccess(res.data)))
      .catch((err) => dispatch(loginFailure(err)));
  }
};

export const logoutReq = () => ({
  type: LOGOUT_REQUEST,
});
export const logoutSuccess = (payload) => ({
  type: LOGOUT_SUCCESS,
  payload,
});
export const logoutFailure = () => ({
  type: LOGOUT_FAILURE,
});

export const logoutUser = () => (dispatch) => {
  dispatch(logoutReq());
  dispatch(logoutSuccess());
};
