import {
  SET_MODAL_LOG_IN,
  SET_MODAL_SIGN_UP,
  TOGGLE_ACCOUNT_ERROR,
} from './types';

const initialState = {
  accountModalAction: 'signUp',
  isError: false,
  errMessage: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_LOG_IN:
      return { ...state, accountModalAction: action.payload };
    case SET_MODAL_SIGN_UP:
      return { ...state, accountModalAction: action.payload };
    case TOGGLE_ACCOUNT_ERROR:
      return { ...state, isError: !state.isError, errMessage: action.payload };
    default:
      return state;
  }
};

export default reducer;
