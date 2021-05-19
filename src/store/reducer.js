import { SET_MODAL_LOG_IN, SET_MODAL_SIGN_UP } from './types';

const initialState = {
  accountModalAction: 'singUp',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_LOG_IN:
      return { ...state, accountModalAction: action.payload };
    case SET_MODAL_SIGN_UP:
      return { ...state, accountModalAction: action.payload };
    default:
      return state;
  }
};

export default reducer;
