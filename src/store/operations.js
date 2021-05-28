/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import {
  SET_MODAL_SIGN_UP,
  SET_MODAL_LOG_IN,
  LOAD_ITEMS_REQUEST,
  LOAD_ITEMS_SUCCESS,
} from './types';

export const setModalSignUp = () => (dispatch) => {
  dispatch({ type: SET_MODAL_SIGN_UP, payload: 'signUp' });
};
export const setModalLogIn = () => (dispatch) => {
  dispatch({ type: SET_MODAL_LOG_IN, payload: 'logIn' });
};

export const getItems = () => (dispatch) => {
  dispatch({ type: LOAD_ITEMS_REQUEST, payload: true });
  axios('https://postil-bedding.herokuapp.com/api/products').then((res) => {
    const favouriteInLocal = JSON.parse(localStorage.getItem('liked')) || [];
    const cartInLocal = JSON.parse(localStorage.getItem('bag')) || [];
    const newArr = res.data.map((el) => {
      if (favouriteInLocal.includes(el.itemNo)) {
        el.isFavorite = !el.isFavorite;
      }
      if (cartInLocal.includes(el.itemNo)) {
        el.inShoppingBag = !el.inShoppingBag;
      }
      // el.inShoppingBag = true;
      el.quantityInBag = 1;
      return el;
    });

    dispatch({ type: LOAD_ITEMS_SUCCESS, payload: newArr });
  });
};
