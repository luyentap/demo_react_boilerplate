/*
 *
 * Game reducer
 *
 */

import { fromJS } from 'immutable';
import { FETCH_PRODUCT } from './constants';

export const initialState = fromJS({
  error: false,
  products: [],
});

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return state.set('error', false).set('products', action.products);
    default:
      return state
        .set('error', true)
        .set('products', [{ name: 'p1', price: 12 }]);
  }
}

export default gameReducer;
