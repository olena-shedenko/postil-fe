/* eslint-disable import/prefer-default-export */
import {
  SET_MODAL_SIGN_UP,
  SET_MODAL_LOG_IN,
  TOGGLE_ACCOUNT_ERROR,
} from './types';

export const setModalSignUp = () => (dispatch) => {
  dispatch({ type: SET_MODAL_SIGN_UP, payload: 'signUp' });
};
export const setModalLogIn = () => (dispatch) => {
  dispatch({ type: SET_MODAL_LOG_IN, payload: 'logIn' });
};
export const toggleAccountError = (errMessage) => (dispatch) => {
  dispatch({ type: TOGGLE_ACCOUNT_ERROR, payload: errMessage });
};
