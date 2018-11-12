import { combineReducers } from 'redux';
import test from './testReducer';
import user from './userReducer';
import weather from './weatherReducer';
import stud from './studReducer';
import news from './newsReducer'

const rootReducer = combineReducers({
  test,
  user,
  weather,
  stud,
  news
});

export default rootReducer;
