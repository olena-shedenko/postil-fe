import {
  SET_MODAL_LOG_IN,
  SET_MODAL_SIGN_UP,
  TOGGLE_BAG_POPUP,
  SET_PRODUCTS_IN_CART,
  REQUEST_PRODUCTS_IN_CART,
  ERROR_REQUEST_PRODUCTS_IN_CART,
  LOAD_ITEMS_REQUEST,
  LOAD_ITEMS_SUCCESS,
  SET_ITEMS,
} from './types';

const initialState = {
  accountModalAction: 'singUp',
  openedBagPopup: false,
  productsInCart: {
    data: [],
    isLoading: false,
  },
  items: {
    data: [],
    isLoading: true,
  },
  item: {
    data: [],
    isLoading: true,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_LOG_IN:
      return { ...state, accountModalAction: action.payload };
    case SET_MODAL_SIGN_UP:
      return { ...state, accountModalAction: action.payload };
    case TOGGLE_BAG_POPUP:
      return { ...state, openedBagPopup: !state.openedBagPopup };
    case REQUEST_PRODUCTS_IN_CART:
      return {
        ...state,
        productsInCart: { ...state.productsInCart, isLoading: false },
      };
    case ERROR_REQUEST_PRODUCTS_IN_CART:
      console.log(action.payload);
      return { ...state };
    case SET_PRODUCTS_IN_CART:
      return {
        ...state,
        productsInCart: { ...state.productsInCart, data: action.payload },
      };
    case LOAD_ITEMS_REQUEST:
      return { ...state, items: { ...state.items, isLoading: action.payload } };
    case LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        items: { ...state.items, isLoading: false, data: action.payload },
      };
    case SET_ITEMS:
      return { ...state, items: { ...state.items, data: action.payload } };
    default:
      return state;
  }
};

export default reducer;
