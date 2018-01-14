import axios from 'axios';
import { apiKey } from '../../../api/apiKey';

export const FETCHING_ERROR = 'FETCHING_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const GET_ARTICLES = 'GET_ARTICLES';

export const getArticles = (category = 'general') => async dispatch => {
  try {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`);

    let payload = {};
    payload[category] = res.data.articles;
    
    dispatch({
      type: GET_ARTICLES,
      payload
    });
  } catch (e) {
    dispatch({
      type: FETCHING_ERROR,
      payload: 'Something went wrong :( Please try again later.'
    });
  }
};

export const closeErrorTile = () => ({
  type: CLEAR_ERROR,
  payload: null
});