import { combineReducers } from 'redux';

import yearAndPos from './yearAndPos';
import viewMode from './viewMode';

export default combineReducers({ viewMode, yearAndPos });
