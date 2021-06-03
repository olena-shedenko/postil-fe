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
  REQUEST_REMOVE_PRODUCT_FROM_CART,
  SUCCESS_REMOVE_PRODUCT_FROM_CART,
  ERROR_REMOVE_PRODUCT_FROM_CART,
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
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTY5ZTdhZDI3YjM1MDAxNTk2ZGUwMCIsImZpcnN0TmFtZSI6IkN1c3RvbWVyIiwibGFzdE5hbWUiOiJOZXdvbmUiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MjI0MDQwMDAsImV4cCI6MTYyMjQ0MDAwMH0._JSYGk94lUDVNHWuzG4SMjZI13-YqOROQcgjqAHO6I0',
      },
    })
    .then((cart) => {
      console.log(cart.data);
      dispatch({ type: SET_PRODUCTS_IN_CART, payload: cart.data.products });
    })
    .catch((err) => {
      dispatch({ type: ERROR_REQUEST_PRODUCTS_IN_CART, payload: err });
    });
};

export const removeProductFromCart = (id) => (dispatch) => {
  dispatch({ type: REQUEST_REMOVE_PRODUCT_FROM_CART });
  axios
    .delete(`https://postil-bedding.herokuapp.com/api/cart/${id}`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTY5ZTdhZDI3YjM1MDAxNTk2ZGUwMCIsImZpcnN0TmFtZSI6IkN1c3RvbWVyIiwibGFzdE5hbWUiOiJOZXdvbmUiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MjI0MDQwMDAsImV4cCI6MTYyMjQ0MDAwMH0._JSYGk94lUDVNHWuzG4SMjZI13-YqOROQcgjqAHO6I0',
      },
    })
    .then((data) => {
      dispatch({
        type: SUCCESS_REMOVE_PRODUCT_FROM_CART,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({ type: ERROR_REMOVE_PRODUCT_FROM_CART, payload: err });
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
