import {
  FETCH_CHARACTERS,
  FETCH_DETAILS,
  FETCH_USER_FAVS,
  SET_USER_FAV,
  REMOVE_USER_FAV,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
} from "../utils/constants";

const initialState = {
  characters: {},
  currentCharacter: null,
  loading: false,
  favouriteIds: [],
  page: 1,
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case INCREMENT_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case DECREMENT_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case FETCH_DETAILS:
      return {
        ...state,
        currentCharacter: action.payload,
      };
    case FETCH_USER_FAVS:
      return {
        ...state,
        favouriteIds: [...action.payload],
      };
    case SET_USER_FAV:
      return {
        ...state,
        favouriteIds: [...state.favouriteIds, action.payload],
      };
    case REMOVE_USER_FAV:
      return {
        ...state,
        favouriteIds: [
          ...state.favouriteIds.filter((favouriteId) => favouriteId !== action.payload),
        ],
      };
    default:
      return {...state};
  }
};

export default characterReducer;
