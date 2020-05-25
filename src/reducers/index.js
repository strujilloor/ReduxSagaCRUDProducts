import { combineReducers } from 'redux';
import productosReducer from './productosReducer';
import alertaReducer from './AlertaReducer';

export default combineReducers({
    productos: productosReducer, // productos será el nombre de nuestro State, de esta forma no se combinarán los States
    alerta: alertaReducer
});
