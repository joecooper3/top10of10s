import { CHANGE_YEAR, CHANGE_POS } from '../actionTypes';

const INITIAL_STATE = {
  year: '2018',
  pos: '1'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_YEAR:
      return { ...state, year: action.payload };
    case CHANGE_POS:
      return { ...state, pos: action.payload };
    default:
      return state;
  }
};
