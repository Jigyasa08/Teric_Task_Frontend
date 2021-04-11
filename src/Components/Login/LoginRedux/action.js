import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";
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

export const loginOperatorData = ({ phone, password }) => (dispatch) => {
  dispatch(loginReq());

  if (phone == "987" && password == "987") {
    dispatch(loginSuccess());
  } else {
    axios({
      method: "POST",
      url: "https://teric-auth-api.herokuapp.com/account/login",
      data: {
        phone,
        password,
      },
    })
      .then((res) => dispatch(loginSuccess(res.data)))
      .catch((err) => dispatch(loginFailure(err)));
  }
};
