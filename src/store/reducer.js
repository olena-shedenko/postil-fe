import {
  SET_MODAL_FORGOT_PASSWORD,
  TOGGLE_ACCOUNT_ERROR,
  TOGGLE_ACCOUNT_MODAL,
  GET_BLOG_POSTS,
  LOAD_ITEMS_REQUEST,
  LOAD_ITEMS_SUCCESS,
  SET_ITEMS,
  SET_PRODUCTS,
  FILTERED_PRODUCTS,
  CLEAR_FILTERED_PRODUCTS,
  FILTER_SIZE,
  FILTER_COLOR,
  FILTER_FABRIC,
  FILTER_CATALOG,
  FILTER_BY_CATEGORY,
  CLEAR_CATEGORY,
  SET_SELECTED_OPTION,
  SET_MIN_SLIDER_VALUE,
  SET_MAX_SLIDER_VALUE,
  SET_CURRENT_PAGE,
  SET_PER_PAGE,
  SET_CART,
  SET_MODAL_LOG_IN,
  SET_MODAL_SIGN_UP,
  TOGGLE_BAG_POPUP,
  SET_PRODUCTS_IN_CART,
  REQUEST_PRODUCTS_IN_CART,
  ERROR_REQUEST_PRODUCTS_IN_CART,
  LOAD_ITEMS_REQUEST,
  LOAD_ITEMS_SUCCESS,
  SET_ITEMS,
  REQUEST_REMOVE_PRODUCT_FROM_CART,
  SUCCESS_REMOVE_PRODUCT_FROM_CART,
  ERROR_REMOVE_PRODUCT_FROM_CART,
} from './types';

const initialState = {
  accountModalAction: 'signUp',
  accountModal: false,
  isError: false,
  errMessage: null,
  openedBagPopup: false,
  productsInCart: {
    data: [],
    isLoading: false,
  },
  blogposts: [],
  items: {
    data: [],
    isLoading: true,
  },
  item: {
    data: [],
    isLoading: true,
  },
  filters: {},
  sliderValues: {
    min: 10,
    max: 280,
  },
  currentPage: 0,
  perPage: 18,
  cart: null,
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
      return { ...state };
    case SET_PRODUCTS_IN_CART:
      return {
        ...state,
        productsInCart: { ...state.productsInCart, data: action.payload },
      };
    case SET_MODAL_FORGOT_PASSWORD:
      return { ...state, accountModalAction: action.payload };
    case TOGGLE_ACCOUNT_ERROR:
      return { ...state, isError: !state.isError, errMessage: action.payload };
    case TOGGLE_ACCOUNT_MODAL:
      return { ...state, accountModal: !state.accountModal };
    case GET_BLOG_POSTS:
      return { ...state, blogposts: action.payload };
    case LOAD_ITEMS_REQUEST:
      return { ...state, items: { ...state.items, isLoading: action.payload } };
    case LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        items: { ...state.items, isLoading: false, data: action.payload },
      };
    case SET_ITEMS:
      return { ...state, items: { ...state.items, data: action.payload } };
    case REQUEST_REMOVE_PRODUCT_FROM_CART:
      return { ...state };
    case SUCCESS_REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        productsInCart: {
          ...state.productsInCart,
          data: action.payload.data.products,
        },
      };
    case ERROR_REMOVE_PRODUCT_FROM_CART:
      return { ...state };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case FILTERED_PRODUCTS:
      return { ...state, filteredProducts: action.payload };
    case CLEAR_FILTERED_PRODUCTS:
      return { ...state, filteredProducts: null };
    case FILTER_SIZE:
      return { ...state, filters: { ...state.filters, sizes: action.payload } };
    case FILTER_COLOR:
      return { ...state, filters: { ...state.filters, color: action.payload } };
    case FILTER_FABRIC:
      return {
        ...state,
        filters: { ...state.filters, fabric: action.payload },
      };
    case FILTER_CATALOG:
      return { ...state, filterCatalog: action.payload };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filters: { ...state.filters, categories: action.payload },
      };
    case CLEAR_CATEGORY: {
      return { ...state, filters: {} };
    }
    case SET_MIN_SLIDER_VALUE: {
      return {
        ...state,
        sliderValues: { ...state.sliderValues, min: action.payload },
      };
    }
    case SET_MAX_SLIDER_VALUE: {
      return {
        ...state,
        sliderValues: { ...state.sliderValues, max: action.payload },
      };
    }
    case SET_SELECTED_OPTION: {
      return {
        ...state,
        filters: { ...state.filters, selectedOption: action.payload },
      };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.payload };
    }
    case SET_PER_PAGE: {
      return { ...state, perPage: action.payload };
    }
    case SET_CART: {
      return { ...state, cart: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
