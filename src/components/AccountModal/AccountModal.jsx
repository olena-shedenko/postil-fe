/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './AccountModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import {
  setModalSignUp,
  setModalLogIn,
  toggleAccountError,
} from '../../store/operations';
import SignUp from './SignUp';
import LogIn from './LogIn';

const AccountModal = () => {
  const forSignUp = useSelector(
    (state) => state.accountModalAction === 'signUp'
  );
  const isError = useSelector((state) => state.isError);
  const errMessage = useSelector((state) => state.errMessage);

  const dispatch = useDispatch();

  const hideError = (e) => {
    if (e.target.className !== 'error-wrapper__error-text') {
      dispatch(toggleAccountError());
    }
  };

  return (
    <>
      {isError && (
        <div
          onClick={(e) => {
            hideError(e);
          }}
          className="error-wrapper"
        >
          <div className="error-wrapper__error-text">{errMessage}</div>
        </div>
      )}
      <div className="modal-wrapper">
        <div className="account-modal">
          <img
            src={`${process.env.PUBLIC_URL}/images/close-icon.svg`}
            alt="close"
            className="account-modal__cross"
          />

          <div className="account-modal__buttons-block">
            <Button
              onClick={() => {
                dispatch(setModalSignUp());
              }}
              type="button"
              addCommonStyles={false}
              className={
                forSignUp
                  ? 'account-modal__buttons-block__button account-modal__buttons-block__button__signup--active'
                  : 'account-modal__buttons-block__button account-modal__buttons-block__button__signup'
              }
              // eslint-disable-next-line react/no-children-prop
              children="Sign Up"
            >
              Sign Up
            </Button>
            <Button
              onClick={() => {
                dispatch(setModalLogIn());
              }}
              type="button"
              addCommonStyles={false}
              className={
                forSignUp
                  ? 'account-modal__buttons-block__button account-modal__buttons-block__button__login'
                  : 'account-modal__buttons-block__button account-modal__buttons-block__button__login--active'
              }
              // eslint-disable-next-line react/no-children-prop
              children="Log In"
            />
          </div>

          {forSignUp ? <SignUp /> : <LogIn />}

          {forSignUp && (
            <div className="account-modal__enter-via-socials">
              <img
                className="account-modal__enter-via-socials__item"
                src={`${process.env.PUBLIC_URL}/images/google.svg`}
                alt="google"
              />
              <img
                className="account-modal__enter-via-socials__item"
                src={`${process.env.PUBLIC_URL}/images/fb.svg`}
                alt="facebook"
              />
            </div>
          )}

          {forSignUp ? (
            <a href="blank" className="account-modal__bottom-link">
              i have an account
            </a>
          ) : (
            <a href="blank" className="account-modal__bottom-link">
              forgot password?
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default AccountModal;
