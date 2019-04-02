/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home_page', initialState);

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

export { selectHome, makeSelectUsername };
