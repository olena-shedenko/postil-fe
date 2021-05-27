/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import {
  SET_MODAL_SIGN_UP,
  SET_MODAL_LOG_IN,
  TOGGLE_BAG_POPUP,
  SET_PRODUCTS_IN_CART,
  REQUEST_PRODUCTS_IN_CART,
  ERROR_REQUEST_PRODUCTS_IN_CART,
  LOAD_ITEMS_REQUEST,
  LOAD_ITEMS_SUCCESS,
} from './types';

export const setModalSignUp = () => (dispatch) => {
  dispatch({ type: SET_MODAL_SIGN_UP, payload: 'signUp' });
};
export const setModalLogIn = () => (dispatch) => {
  dispatch({ type: SET_MODAL_LOG_IN, payload: 'logIn' });
};

export const toggleBagPopup = () => (dispatch) => {
  dispatch({ type: TOGGLE_BAG_POPUP });
};

export const setCartProducts = () => (dispatch) => {
  dispatch({ type: REQUEST_PRODUCTS_IN_CART });
  axios
    .get('https://postil-bedding.herokuapp.com/api/cart', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTY5ZTdhZDI3YjM1MDAxNTk2ZGUwMCIsImZpcnN0TmFtZSI6IkN1c3RvbWVyIiwibGFzdE5hbWUiOiJOZXdvbmUiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MjE5NjIxMDksImV4cCI6MTYyMTk5ODEwOX0.Ryb-PRWFFlNdwNBKWGoI7P2GWbGELE3vWWWnWi1FE5M',
      },
    })
    .then((cart) => {
      dispatch({ type: SET_PRODUCTS_IN_CART, payload: cart.data.products });
    })
    .catch((err) => {
      dispatch({ type: ERROR_REQUEST_PRODUCTS_IN_CART, payload: err });
    });
};

export const getItems = () => (dispatch) => {
  dispatch({ type: LOAD_ITEMS_REQUEST, payload: true });
  axios('https://postil-bedding.herokuapp.com/api/products').then((res) => {
    const favouriteInLocal = JSON.parse(localStorage.getItem('Liked')) || [];
    const cartInLocal = JSON.parse(localStorage.getItem('Bag')) || [];
    const newArr = res.data.map((el) => {
      if (favouriteInLocal.includes(el.id)) {
        el.isFavorite = !el.isFavorite;
      }
      if (cartInLocal.includes(el.id)) {
        el.inCart = !el.inCart;
      }
      el.inShoppingBag = true;
      el.isFavourite = false;
      el.quantity = 1;
      return el;
    });
    dispatch({ type: LOAD_ITEMS_SUCCESS, payload: newArr });
  });
};
