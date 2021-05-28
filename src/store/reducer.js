import {
  SET_MODAL_LOG_IN,
  SET_MODAL_SIGN_UP,
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
} from './types';

const initialState = {
  accountModalAction: 'singUp',
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
    min: 15,
    max: 250,
  },
  currentPage: 0,
  perPage: 18,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_LOG_IN:
      return { ...state, accountModalAction: action.payload };
    case SET_MODAL_SIGN_UP:
      return { ...state, accountModalAction: action.payload };
    case LOAD_ITEMS_REQUEST:
      return { ...state, items: { ...state.items, isLoading: action.payload } };
    case LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        items: { ...state.items, isLoading: false, data: action.payload },
      };
    case SET_ITEMS:
      return { ...state, items: { ...state.items, data: action.payload } };
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
    default:
      return state;
  }
};

export default reducer;
