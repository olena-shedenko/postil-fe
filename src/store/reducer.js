import {
  SET_MODAL_LOG_IN,
  SET_MODAL_SIGN_UP,
  SET_BAG_POPUP,
  SET_PRODUCTS_IN_CART,
} from './types';

const initialState = {
  accountModalAction: 'singUp',
  openedBagPopup: false,
  productsInCart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_LOG_IN:
      return { ...state, accountModalAction: action.payload };
    case SET_MODAL_SIGN_UP:
      return { ...state, accountModalAction: action.payload };
    case SET_BAG_POPUP:
      return { ...state, openedBagPopup: action.payload };
    case SET_PRODUCTS_IN_CART:
      return { ...state, productsInCart: action.payload };
    default:
      return state;
  }
};

export default reducer;
