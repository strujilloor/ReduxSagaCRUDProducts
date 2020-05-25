import { combineReducers } from 'redux';
import ProductsReducer from './ProductsReducer';
import AlertReducer from './AlertReducer';

export default combineReducers({
    products: ProductsReducer, // productos será el nombre de nuestro State, de esta forma no se combinarán los States
    alert: AlertReducer
});
