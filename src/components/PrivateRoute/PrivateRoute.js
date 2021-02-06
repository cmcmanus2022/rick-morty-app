import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({Component}) => {
  const {isAuth} = useSelector((state) => state.authState);

  return isAuth ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
