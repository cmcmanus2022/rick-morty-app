import {
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../utils/constants";

import * as api from "../api";

// Action Creators
export const login = (formData, navigate) => async (dispatch) => {
  try {
    const {data} = await api.login(formData);

    dispatch({type: LOGIN_SUCCESS, payload: data});

    navigate("/characters");
  } catch (error) {
    dispatch({type: LOGIN_FAIL, payload: {message: error}});
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const {data} = await api.signup(formData);

    dispatch({type: SIGNUP_SUCCESS, payload: data});

    navigate("/characters");
  } catch (error) {
    dispatch({type: SIGNUP_FAIL, payload: {message: error}});
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({type: LOGOUT});
  } catch (error) {
    console.log(error);
  }
};
