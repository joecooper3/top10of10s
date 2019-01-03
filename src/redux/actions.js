import { CHANGE_YEAR, CHANGE_POS } from './actionTypes';

export const changeYear = inp => ({
  type: CHANGE_YEAR,
  payload: inp
});

export const changePos = inp => ({
  type: CHANGE_POS,
  payload: inp
});
