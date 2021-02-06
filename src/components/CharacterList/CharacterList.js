import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import CharacterCard from "../CharacterCard/CharacterCard.js";
import {
  fetchCharacters,
  fetchUserFavs,
  incrementPage,
  decrementPage,
} from "../../actions/characters.js";
import "./CharacterList.scss";

const CharacterList = () => {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.characterState.page);

  useEffect(() => {
    dispatch(fetchCharacters(page));
    dispatch(fetchUserFavs());
  }, [dispatch, page]);

  const charactersState = useSelector((state) => state.characterState.characters);
  const favouriteIdsList = useSelector((state) => state.characterState.favouriteIds);

  const isFavouriteHandler = (id) => {
    return favouriteIdsList.includes(id);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    dispatch(incrementPage(page));
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    dispatch(decrementPage(page));
  };

  const loadList = (charactersState) => {
    return (
      <div className="character-list">
        <div className="character-list-header">
          <h4>Number of Results: {charactersState.info.count}</h4>
          <p>&#9733; Favourite Characters</p>
        </div>
        <div className="character-list-results">
          {charactersState.results.map((character, index) => (
            <CharacterCard
              key={index.toString()}
              id={index + 1}
              character={character}
              isFavourite={isFavouriteHandler(character.id)}
            />
          ))}
        </div>
      </div>
    );
  };

  const nextPageButton = (info) => {
    if (info.next !== null) {
      return (
        <button className="page-button" onClick={handleIncrement}>
          Next
        </button>
      );
    }
  };

  const prevPageButton = (info) => {
    if (info.prev !== null) {
      return (
        <button className="page-button" onClick={handleDecrement}>
          Previous
        </button>
      );
    }
  };

  return !charactersState.results ? (
    "Loading..."
  ) : (
    <div className="character-list-container">
      {loadList(charactersState)}
      <div className="buttons-container">
        {prevPageButton(charactersState.info)}
        {nextPageButton(charactersState.info)}
      </div>
    </div>
  );
};

export default CharacterList;
