/*
 *
 * Game actions
 *
 */

import { DEFAULT_ACTION, FETCH_PRODUCT } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

/**
 * @param {array} list product fetch from api
 *
 * @returns {object} list product and type of action
 */
export function loadProduct(products) {
  return {
    type: FETCH_PRODUCT,
    products,
  };
}
