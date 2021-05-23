/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  SET_MODAL_SIGN_UP,
  SET_MODAL_LOG_IN,
  SET_BAG_POPUP,
  SET_PRODUCTS_IN_CART,
  REQUEST_PRODUCTS_IN_CART,
  ERROR_REQUEST_PRODUCTS_IN_CART,
} from './types';

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

export const setCartProducts = () => (dispatch) => {
  dispatch({ type: REQUEST_PRODUCTS_IN_CART });
  axios
    .get('https://postil-bedding.herokuapp.com/api/cart', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTY5ZTdhZDI3YjM1MDAxNTk2ZGUwMCIsImZpcnN0TmFtZSI6IkN1c3RvbWVyIiwibGFzdE5hbWUiOiJOZXdvbmUiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MjE3NTg2MzAsImV4cCI6MTYyMTc5NDYzMH0._WmWYm6Awjt2wPcigQ-cyRknO-mUM7ZJYDWG6hH97Qo',
      },
    })
    .then((cart) => {
      dispatch({ type: SET_PRODUCTS_IN_CART, payload: cart });
    })
    .catch((err) => {
      dispatch({ type: ERROR_REQUEST_PRODUCTS_IN_CART, payload: err });
    });
};
