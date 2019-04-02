import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the game state domain
 */

const selectProductList = state => state.get('product_list', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Game
 */

const getProductList = () =>
  createSelector(selectProductList, products => products.get('products'));

export default getProductList;
export { selectProductList };
