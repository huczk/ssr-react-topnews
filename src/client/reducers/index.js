import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import categoriesReducer from './categoriesReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  articles: articlesReducer,
  categories: categoriesReducer,
  error: errorReducer
});