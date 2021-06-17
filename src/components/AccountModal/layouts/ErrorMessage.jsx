/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../AccountModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAccountError } from '../../../store/operations';

const ErrorMessage = () => {
  const dispatch = useDispatch();

  const isError = useSelector((state) => state.isError);
  const errMessage = useSelector((state) => state.errMessage);

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
    </>
  );
};
export default ErrorMessage;
