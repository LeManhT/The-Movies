import React from "react";
import "./signup.scss";
import LoginFieldset from "../../../ui/loginFieldset/LoginFieldset";
import { LIST_LOGIN } from "../../../../constants/constants";

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <div className="sign-up-left">
        <div className="list-left-title">
          <h2>Benefits of being a member</h2>
        </div>
        <ul className="list-left-items">
          {LIST_LOGIN.map((item, index) => {
            return (
              <li key={index} className="left-item">
                <span><i className="fa-solid fa-check fa-beat"></i></span>
                <span className="item-content">{item.content}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sign-up-right">
        <div className="sign-up-title">
          <h2>Sign up for an account</h2>
        </div>
        <div className="sign-up-description">
          <p>
            Signing up for an account is free and easy. Fill out the form below
            to get started. JavaScript is required to to continue.
          </p>
        </div>

        <LoginFieldset
          titleField={"Username"}
          placeholder={"Enter your username"}
          fieldIdentity={"username"}
        />
        <LoginFieldset
          titleField={"Password (4 characters minimum)"}
          placeholder={"Enter your password"}
          fieldIdentity={"password"}
        />
        <LoginFieldset
          titleField={"Password Confirm"}
          placeholder={"Enter your confirm password"}
          fieldIdentity={"confirm_password"}
        />
        <LoginFieldset
          titleField={"Email"}
          placeholder={"Enter your email"}
          fieldIdentity={"email"}
        />

        <div className="sign-up-description">
          <p>
            By clicking the "Sign up" button below, I certify that I have read
            and agree to the TMDB terms of use and privacy policy.
          </p>
        </div>

        <div className="sign-up-group">
          <button className="btn-register">Register</button>
          <button className="btn-cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
