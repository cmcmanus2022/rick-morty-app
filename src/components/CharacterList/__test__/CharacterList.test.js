import React from "react";
import ReactDOM from "react-dom";
import CharacterList from "../CharacterList";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {reducers} from "../../../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

it("renders successfully", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><CharacterList /></Provider>, div)
})


