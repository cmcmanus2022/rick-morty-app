import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import "./Auth.scss";
import {signup, login} from "../../actions/auth.js";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />;

  const handleShowPassword = (e) => {
    e.preventDefault();
    setPasswordShown(passwordShown ? false : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(login(formData, navigate));
    }
  };

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const switchMode = () => {
    setIsSignup(isSignup ? false : true);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h3>{isSignup ? "Create Account" : "Sign In"}</h3>
        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <div className="form-group">
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  onChange={handleInputChange}
                  required={true}
                />
              </div>
              <div className="form-group">
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  onChange={handleInputChange}
                  required={true}
                />
              </div>
            </>
          )}
          <div className="form-group">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleInputChange}
              required={true}
            />
          </div>
          <div className="form-group">
            <input
              id="password"
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              required={true}
            />
            <button onClick={handleShowPassword} className="password-button">
              {eye}
            </button>
          </div>
          {isSignup && (
            <div className="form-group">
              <input
                id="cpassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                onChange={handleInputChange}
                required={true}
              />
            </div>
          )}
          <div className="buttons-wrapper">
            <button type="submit" className="auth-button">
              {isSignup ? "Sign Up" : "Sign In"}
            </button>
            <button className="already" onClick={switchMode}>
              {isSignup ? "Already registered? Sign in" : "Not registered? Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
