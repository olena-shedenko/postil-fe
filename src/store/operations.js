/* eslint-disable import/prefer-default-export */
import { SET_MODAL_SIGN_UP, SET_MODAL_LOG_IN, SET_BAG_POPUP } from './types';

export const setModalSignUp = () => (dispatch) => {
  dispatch({ type: SET_MODAL_SIGN_UP, payload: 'signUp' });
};
export const setModalLogIn = () => (dispatch) => {
  dispatch({ type: SET_MODAL_LOG_IN, payload: 'logIn' });
};

export const openBagPopup = () => (dispatch) => {
  dispatch({ type: SET_BAG_POPUP, payload: true });
};

export const closeBagPopup = () => (dispatch) => {
  dispatch({ type: SET_BAG_POPUP, payload: false });
};
