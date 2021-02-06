import axios from "axios";
import {SERVER_URL} from "../utils/constants.js";

// const api_url = BASE_API_URL;

const API = axios.create({baseURL: SERVER_URL});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("token")).token
    }`;
  }
  return req;
});

// character requests to rick and morty api
export const fetchCharacters = (page) => API.get(`/character/${page}`);
export const fetchDetails = (id) => API.get(`/character/fetch/${id}`);

// favourites requests to db
export const fetchUserFavs = (userId) => API.get(`/users/favourites/${userId}`);
export const setUserFav = (characterId, userId) =>
  API.post(`/users/favourites/${userId}/${characterId}`, characterId);
export const removeUserFav = (characterId, userId) =>
  API.delete(`/users/favourites/${userId}/${characterId}`);

// auth requests to db
export const login = (formData) => API.post("/auth/login", formData);
export const signup = (formData) => API.post("auth/register", formData);
