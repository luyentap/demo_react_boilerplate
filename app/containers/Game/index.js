/**
 *
 * Game
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import getProductList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import TitleGame from './TitleGame';

/* eslint-disable react/prefer-stateless-function */
export class Game extends React.PureComponent {
  render() {
    const { products } = this.props;
    return (
      <div>
        <TitleGame>
          <FormattedMessage {...messages.header} />{' '}
        </TitleGame>
        {products.map(item => (
          <p>{item.name}</p>
        ))}
      </div>
    );
  }
}

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  products: getProductList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'product_list', reducer });
const withSaga = injectSaga({ key: 'product_list', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Game);
