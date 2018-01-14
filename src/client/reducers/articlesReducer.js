import { GET_ARTICLES } from '../actions';

export default (state = {}, action) => {
  switch(action.type) {
    case GET_ARTICLES:
      return {...state, ...action.payload};
    default:
      return state;
  }
};