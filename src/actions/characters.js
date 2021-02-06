import {
  FETCH_CHARACTERS,
  FETCH_DETAILS,
  SET_USER_FAV,
  REMOVE_USER_FAV,
  FETCH_USER_FAVS,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
} from "../utils/constants";

import * as api from "../api";

// Action Creators
export const fetchCharacters = (page) => async (dispatch) => {
  try {
    const {data} = await api.fetchCharacters(page);

    dispatch({type: FETCH_CHARACTERS, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};

export const incrementPage = (page) => async (dispatch) => {
  try {
    dispatch({type: INCREMENT_PAGE, payload: page + 1});
  } catch (error) {
    console.log(error.message);
  }
};

export const decrementPage = (page) => async (dispatch) => {
  try {
    dispatch({type: DECREMENT_PAGE, payload: page - 1});
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchDetails = (id) => async (dispatch) => {
  try {
    const {data} = await api.fetchDetails(id);

    dispatch({type: FETCH_DETAILS, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchUserFavs = () => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  try {
    const {data} = await api.fetchUserFavs(userId);

    dispatch({type: FETCH_USER_FAVS, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};

export const setUserFav = (characterId) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  try {
    const {data} = await api.setUserFav(characterId, userId);

    dispatch({type: SET_USER_FAV, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};

export const removeUserFav = (characterId) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  try {
    await api.removeUserFav(characterId, userId);

    dispatch({type: REMOVE_USER_FAV, payload: characterId});
  } catch (error) {
    console.log(error.message);
  }
};
