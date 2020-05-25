import { all } from 'redux-saga/effects';
import productos from './ProductoSagas';

export default function* rootSaga() {
    yield all([
        productos(),
    ]);
}