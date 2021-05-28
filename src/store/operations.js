/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import {
  SET_MODAL_SIGN_UP,
  SET_MODAL_LOG_IN,
  LOAD_ITEMS_REQUEST,
  LOAD_ITEMS_SUCCESS,
} from './types';
import { filteredProducts } from './actions';
import { getProducts } from './selectors';

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

const sortAsc = (arr, field) => {
  return arr.sort((a, b) => {
    if (a[field] > b[field]) return 1;
    if (b[field] > a[field]) return -1;
    return 0;
  });
};

const sortDesc = (arr, field) => {
  return arr.sort((a, b) => {
    if (a[field] > b[field]) return -1;
    if (b[field] > a[field]) return 1;
    return 0;
  });
};

export const filterAndSortOperation = () => (dispatch, getState) => {
  const state = getState();
  let products = getProducts(state);
  const { filters, sliderValues } = state;
  const { categories, color, fabric, sizes, selectedOption } = filters;
  const { min, max } = sliderValues;

  if (sizes) {
    products = products.filter((product) => product.sizes === sizes);
  }

  if (color) {
    products = products.filter((product) => product.color === color);
  }

  if (fabric) {
    products = products.filter((product) => product.fabric === fabric);
  }

  if (categories) {
    products = products.filter((product) => product.categories === categories);
  }

  if (selectedOption && selectedOption === 'low-to-high') {
    products = sortAsc([...products], 'currentPrice');
  }

  if (min && max)
    products = products.filter(
      (item) => item.currentPrice >= min && item.currentPrice <= max
    );

  if (selectedOption && selectedOption === 'high-to-low') {
    products = sortDesc([...products], 'currentPrice');
  }
  // eslint-disable-next-line no-console
  // console.log('Final products', products);
  dispatch(filteredProducts(products));
};
