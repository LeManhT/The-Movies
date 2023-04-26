import React from "react";
import "./login.scss";
import LoginFieldset from "../../../ui/loginFieldset/LoginFieldset";
import { useTranslation } from 'react-i18next';

const Login = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-title">
            <h2>{t('Login_To_Your_Account')}</h2>
          </div>
          <div className="login-description">
            <p>
              {t('Login_Description')}
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
                  titleField={t('Username')}
                  placeholder={t('Enter_Your_Username')}
                  fieldIdentity={"username"}
                />
                <LoginFieldset
                  titleField={t('Password')}
                  placeholder={t('Enter_Your_Password')}
                  fieldIdentity={"password"}
                />
              </fieldset>
            </form>
          </div>

          <div className="login-btn-group">
            <button className="btn-register">{t('Login')}</button>
            <button className="btn-cancel">{t('Cancel')}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
