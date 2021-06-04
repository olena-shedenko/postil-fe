/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../AccountModal.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAccountModal } from '../../../store/operations';
import SignUp from '../modalComponents/SignUp';
import LogIn from '../modalComponents/LogIn';

const MobileModal = ({ loginSubmit, signUpSubmit }) => {
  const dispatch = useDispatch();

  const forSignUp = useSelector(
    (state) => state.accountModalAction === 'signUp'
  );

  return (
    <>
      <div className="mobile-account-modal">
        <img
          onClick={() => dispatch(toggleAccountModal())}
          src={`${process.env.PUBLIC_URL}/images/accountModal/back.svg`}
          alt="close"
          className="back-button"
        />

        {forSignUp ? (
          <SignUp handleSubmit={signUpSubmit} />
        ) : (
          <LogIn handleSubmit={loginSubmit} />
        )}
      </div>
    </>
  );
};

MobileModal.propTypes = {
  signUpSubmit: PropTypes.func.isRequired,
  loginSubmit: PropTypes.func.isRequired,
};

export default MobileModal;
