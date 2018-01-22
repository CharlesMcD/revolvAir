import { combineReducers } from 'redux';

import * as moviesReducer from './movies'
import * as locationReducer from './location'

export default combineReducers(Object.assign(
  moviesReducer,
  locationReducer,
));