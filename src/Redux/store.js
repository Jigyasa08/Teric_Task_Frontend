import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { registerReducer } from "../Components/Register/RegisterRedux/reducer";
import { loginReducer } from "../Components/Login/LoginRedux/reducer";

const rootReducer = combineReducers({
  register: registerReducer,
  auth: loginReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
