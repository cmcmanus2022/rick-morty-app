import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Auth from "./components/Auth/Auth.js";
import CharacterList from "./components/CharacterList/CharacterList.js";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails.js";
import Header from "./components/Header/Header.js";
import NotFound from "./components/NotFound/NotFound.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
import {useSelector} from "react-redux";

const App = () => {
  const {isAuth} = useSelector((state) => state.authState);
  return (
    <BrowserRouter>
      <Header isAuth={isAuth} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route
            exact
            path="/characters"
            element={<PrivateRoute Component={CharacterList} />}
          />
          <Route
            exact
            path="/characters/details/:id"
            element={<PrivateRoute Component={CharacterDetails} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
