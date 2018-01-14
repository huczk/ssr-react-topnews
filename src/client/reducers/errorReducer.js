import { FETCHING_ERROR, CLEAR_ERROR } from '../actions';

export default (state = null, action) => {
  switch(action.type) {
    case FETCHING_ERROR:
      return action.payload;
    case CLEAR_ERROR:
      return null;
    default:
      return null;
  }
};