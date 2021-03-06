/* eslint-disable no-underscore-dangle */
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
  TOGGLE_ACCOUNT_ERROR,
  TOGGLE_ACCOUNT_MODAL,
  SET_MODAL_FORGOT_PASSWORD,
  GET_BLOG_POSTS,
  SET_ITEMS,
  CLEAR_CART,
  SET_PRODUCTS_IN_CART_LOADING,
  TOGGLE_WISHLIST,
  REQUEST_SET_WISHLIST_PRODUCTS,
  SET_WISHLIST_PRODUCTS,
  ERROR_SET_WISHLIST_PRODUCTS,
  REQUEST_REMOVE_PRODUCT_FROM_WISHLIST,
  SUCCESS_REMOVE_PRODUCT_FROM_WISHLIST,
  ERROR_REMOVE_PRODUCT_FROM_WISHLIST,
  SUCCESS_ADD_PRODUCT_TO_WISHLIST,
} from './types';
import { filteredProducts, setCart } from './actions';
import { getProducts, getWishList } from './selectors';

export const setModalSignUp = () => (dispatch) => {
  dispatch({ type: SET_MODAL_SIGN_UP, payload: 'signUp' });
};
export const setModalLogIn = () => (dispatch) => {
  dispatch({ type: SET_MODAL_LOG_IN, payload: 'logIn' });
};
export const setModalForgotPassword = () => (dispatch) => {
  dispatch({ type: SET_MODAL_FORGOT_PASSWORD, payload: 'forgotPassword' });
};
export const toggleAccountError = (errMessage) => (dispatch) => {
  dispatch({ type: TOGGLE_ACCOUNT_ERROR, payload: errMessage });
};
export const toggleAccountModal = () => (dispatch) => {
  dispatch({ type: TOGGLE_ACCOUNT_MODAL });
};
export const toggleBagPopup = () => (dispatch) => {
  dispatch({ type: TOGGLE_BAG_POPUP });
};

export const setCartProducts = () => (dispatch) => {
  dispatch({ type: REQUEST_PRODUCTS_IN_CART });
  dispatch({ type: SET_PRODUCTS_IN_CART_LOADING, payload: false });
  axios
    .get('https://postil-bedding.herokuapp.com/api/cart', {
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
    })
    .then((cart) => {
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
        Authorization: sessionStorage.getItem('token'),
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

export const getBlogPosts = () => (dispatch) => {
  axios('http://localhost:3000/blogposts.json').then((res) =>
    dispatch({ type: GET_BLOG_POSTS, payload: res.data })
  );
};

export const getItems = () => (dispatch) => {
  dispatch({ type: LOAD_ITEMS_REQUEST, payload: true });
  axios('https://postil-bedding.herokuapp.com/api/products').then((res) => {
    const cartInLocal = JSON.parse(localStorage.getItem('bag')) || [];
    const newArr = res.data.map((el) => {
      el.quantityInBag = 0;
      if (cartInLocal.includes(el._id)) {
        el.inShoppingBag = !el.inShoppingBag;
        el.quantityInBag = 1;
      }
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
  const { categories, color, fabric, sizes, selectedOption, name } = filters;
  const { min, max } = sliderValues;

  if (sizes) {
    products = products.filter((product) => product.sizes === sizes);
  }
  if (name) {
    products = products.filter((product) => product.name.includes(name));
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
  dispatch(filteredProducts(products));
};

export const addToCart =
  ({ productId, onSuccess }) =>
  (dispatch, getState) => {
    const state = getState();
    const items = getProducts(state);
    const jwt = sessionStorage.getItem('token');
    if (jwt !== null) {
      axios
        .put(
          `https://postil-bedding.herokuapp.com/api/cart/${productId}`,
          null,
          {
            headers: {
              Authorization: jwt,
            },
          }
        )
        .then((cart) => {
          dispatch({ type: SET_PRODUCTS_IN_CART, payload: cart.data.products });
          if (typeof onSuccess === 'function') onSuccess();
        });
    } else {
      const newArr = items.map((el) =>
        el._id === productId
          ? {
              ...el,
              inShoppingBag: true,
              quantityInBag: el.quantityInBag + 1,
            }
          : el
      );
      dispatch({ type: SET_ITEMS, payload: newArr });

      const cartArr = JSON.parse(localStorage.getItem('bag')) || [];
      if (!cartArr.includes(productId)) {
        cartArr.push(productId);
      }
      const cart = JSON.stringify(cartArr);
      localStorage.setItem('bag', cart);
      onSuccess();
    }
  };

export const removeFromCart =
  ({ productId, onSuccess }) =>
  (dispatch) => {
    const jwt = sessionStorage.getItem('token');
    axios
      .delete(`https://postil-bedding.herokuapp.com/api/cart/${productId}`, {
        headers: {
          Authorization: jwt,
        },
      })
      .then((res) => {
        dispatch(setCart(res.data));
        if (typeof onSuccess === 'function') onSuccess();
      });
  };
export const removeOneFromCart =
  ({ productId, onSuccess }) =>
  (dispatch) => {
    const jwt = sessionStorage.getItem('token');
    axios
      .delete(
        `https://postil-bedding.herokuapp.com/api/cart/product/${productId}`,
        {
          headers: {
            Authorization: jwt,
          },
        }
      )
      .then((res) => {
        dispatch(setCart(res.data));
        if (typeof onSuccess === 'function') onSuccess();
      });
  };
export const deleteCart = () => (dispatch) => {
  const jwt = sessionStorage.getItem('token');
  axios
    .delete(`https://postil-bedding.herokuapp.com/api/cart`, {
      headers: {
        Authorization: jwt,
      },
    })
    .then(() => {
      dispatch({ type: CLEAR_CART });
    });
};

export const setLoading = () => (dispatch) => {
  dispatch({ type: SET_PRODUCTS_IN_CART_LOADING, payload: true });
};
export const toggleWishlist = () => (dispatch) => {
  dispatch({ type: TOGGLE_WISHLIST });
};

export const setWishlist = () => (dispatch) => {
  dispatch({ type: REQUEST_SET_WISHLIST_PRODUCTS });
  axios
    .get('https://postil-bedding.herokuapp.com/api/wishlist', {
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
    })
    .then((wishlist) => {
      dispatch({
        type: SET_WISHLIST_PRODUCTS,
        payload: wishlist.data.products,
      });
    })
    .catch((err) => {
      dispatch({ type: ERROR_SET_WISHLIST_PRODUCTS, payload: err });
    });
};

export const removeProductFromWishlist = (id) => (dispatch) => {
  dispatch({ type: REQUEST_REMOVE_PRODUCT_FROM_WISHLIST });
  axios
    .delete(`https://postil-bedding.herokuapp.com/api/wishlist/${id}`, {
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
    })
    .then((data) => {
      dispatch({
        type: SUCCESS_REMOVE_PRODUCT_FROM_WISHLIST,
        payload: data.data.products,
      });
    })
    .catch((err) => {
      dispatch({ type: ERROR_REMOVE_PRODUCT_FROM_WISHLIST, payload: err });
    });
};

export const addToWishlist = (id) => (dispatch, getState) => {
  const jwt = sessionStorage.getItem('token');
  const state = getState();
  const items = getWishList(state);
  if (jwt !== null) {
    if (!items || !items.find((item) => item._id === id)) {
      axios
        .put(`https://postil-bedding.herokuapp.com/api/wishlist/${id}`, null, {
          headers: {
            Authorization: jwt,
          },
        })
        .then((res) => {
          dispatch({
            type: SUCCESS_ADD_PRODUCT_TO_WISHLIST,
            payload: res.data.products,
          });
        });
    }
  } else {
    // alert('Please, Sign In or Log In to add product in wishlist');
    dispatch(
      toggleAccountError('Please, Sign In or Log In to add product in wishlist')
    );
  }
};
