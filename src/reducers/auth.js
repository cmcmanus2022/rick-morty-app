import {
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../utils/constants";

const token = localStorage.getItem("token");

const initialState = token ? {isAuth: true, token} : {isAuth: false, token: null};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_FAIL:
      return {
        ...state,
        isAuth: false,
        message: action.payload.message,
        error: true,
        token: null,
      };
    case SIGNUP_SUCCESS:
      localStorage.setItem("userId", action.payload.result._id);
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuth: true,
        error: false,
        token: action.payload.token,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuth: false,
        message: action.payload.message,
        error: true,
        token: null,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("userId", action.payload.result._id);
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuth: true,
        error: false,
        token: action.payload.token,
      };
    case LOGOUT:
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      return {...state, isAuth: false, token: null};
    default:
      return state;
  }
};

export default authReducer;
