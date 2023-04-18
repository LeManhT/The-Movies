import React from "react";
import "./login.scss";
import LoginFieldset from "../../../ui/loginFieldset/LoginFieldset";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-title">
            <h2>Login to your account</h2>
          </div>
          <div className="login-description">
            <p>
              In order to use the editing and rating capabilities of TMDB, as
              well as get personal recommendations you will need to login to
              your account. If you do not have an account, registering for an
              account is free and simple. <a href="/">Click here</a> to get
              started.
            </p>
            <p>
              If you signed up but didn't get your verification email,{" "}
              <a href="/">click here</a> to have it resent.
            </p>
          </div>
          <div className="login-form">
            <form action="" id="login_form">
              <fieldset>
                <LoginFieldset
                  titleField={"Username"}
                  placeholder={"Enter your username"}
                  fieldIdentity={"username"}
                />
                <LoginFieldset
                  titleField={"Password"}
                  placeholder={"Enter your password"}
                  fieldIdentity={"password"}
                />
              </fieldset>
            </form>
          </div>

          <div className="login-btn-group">
            <button className="btn-register">Login</button>
            <button className="btn-cancel">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
