import { CHANGE_YEAR, CHANGE_POS, CHANGE_VIEW } from './actionTypes';

export const changeYear = inp => ({
  type: CHANGE_YEAR,
  payload: inp
});

export const changePos = inp => ({
  type: CHANGE_POS,
  payload: inp
});

export const changeView = inp => ({
  type: CHANGE_VIEW,
  payload: inp
});
