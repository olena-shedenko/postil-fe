/* eslint-disable no-param-reassign */
import axios from 'axios';
import { LOAD_ITEMS_REQUEST, LOAD_ITEMS_SUCCESS } from './types';

const getItems = () => (dispatch) => {
  dispatch({ type: LOAD_ITEMS_REQUEST, payload: true });
  axios('https://postil-bedding.herokuapp.com/api/products').then((res) => {
    // const favouriteInLocal = JSON.parse(localStorage.getItem('Liked')) || [];
    // const cartInLocal = JSON.parse(localStorage.getItem('Cart')) || [];
    // const newArr = res.data.map((el) => {
    //   if (favouriteInLocal.includes(el.id)) {
    //     el.isFavorite = !el.isFavorite;
    //   }
    //   if (cartInLocal.includes(el.id)) {
    //     el.inCart = !el.inCart;
    //   }
    //   return el;
    // });
    const newArr = res.data.map((el) => {
      el.inShoppingBag = true;
      el.isFavourite = false;
      el.quantity = 1;
      return el;
    });
    dispatch({ type: LOAD_ITEMS_SUCCESS, payload: newArr });
  });
};

export default getItems;
