import { all } from 'redux-saga/effects';
import products from './ProductsSagas';

export default function* rootSaga() {
    yield all([
        products(),
    ]);
}