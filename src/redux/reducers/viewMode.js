import { CHANGE_VIEW } from '../actionTypes';

const INITIAL_STATE = {
  view: 'single'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return { ...state, view: action.payload };
    default:
      return state;
  }
};
