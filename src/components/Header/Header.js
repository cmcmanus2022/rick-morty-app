import React from "react";
import headerImage from "../../images/header.png";
import {Link, Navigate, useNavigate, useLocation, matchPath} from "react-router-dom";
import {logout} from "../../actions/auth";
import {useDispatch} from "react-redux";
import "./Header.scss";

const Header = (props) => {
  const {isAuth} = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const isDetailsPage = matchPath("characters/details/*", pathname);

  return (
    <div className={isAuth ? "container-loggedin" : "container-loggedout"}>
      {isDetailsPage && (
        <Link className="back-button" to="/characters">
          &#8592;
        </Link>
      )}
      <div className="image-wrapper">
        <Link className="nav-item" to="/characters">
          <img src={headerImage} alt="rick and morty header" />
        </Link>
      </div>
      <div className="nav-links">
        <div className="nav-item">
          {isAuth && (
            <div className="logged-in">
              <Link className="logout" to="/" onClick={logoutHandler}>
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
