import { call, put, fork } from 'redux-saga/effects';
import { loadProduct } from './actions';

const fetchProduct = () =>
  new Promise((resolve, reject) => {
    fetch('http://5c87325bcc034a0014bd267a.mockapi.io/products')
      .then(responsive => responsive.json())
      .then(result => {
        resolve({ data: result });
      })
      .catch(error => {
        reject(new Error(error));
      });
  });

// Individual exports for testing
function* gameSaga() {
  // See example in containers/HomePage/saga.js
  const products = yield call(fetchProduct);
  // console.log(products);
  yield put(loadProduct(products.data));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* product() {
  yield fork(gameSaga);
  // yield takeEvery('FETCH_REQUESTED', gameSaga)
  // takeLatest(FETCH_PRODUCT,fetchProduct)
}
