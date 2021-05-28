import {
  SET_MODAL_LOG_IN,
  SET_MODAL_SIGN_UP,
  TOGGLE_ACCOUNT_ERROR,
  TOGGLE_ACCOUNT_MODAL,
  LOAD_ITEMS_REQUEST,
  LOAD_ITEMS_SUCCESS,
  SET_ITEMS,
} from './types';

const initialState = {
  accountModalAction: 'singUp',
  accountModal: false,
  isError: false,
  errMessage: null,
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
    case TOGGLE_ACCOUNT_ERROR:
      return { ...state, isError: !state.isError, errMessage: action.payload };
    case TOGGLE_ACCOUNT_MODAL:
      return { ...state, accountModal: !state.accountModal };
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
