import { put, call, takeEvery, all } from 'redux-saga/effects';
import {
    START_PRODUCTS_DOWNLOAD,
    ADD_PRODUCT,
    GET_PRODUCT_DELETE,
    START_PRODUCT_EDITION
} from '../types';
import {
    downloadProductsSuccess,
    downloadProductsError,
    addProductSuccess,
    addProductError,
    removeProductSuccess,
    removeProductError,
    editProductSuccess,
    editProductError
} from '../actions/productActions';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

// Función que descarga los productos de la base de datos
function* getProducts({ payload }) { // payload es literalmente el payload que viene en la action que dispara esta función
    try {
        // call recibe la función, y los parámetros de esta
        const response = yield call( axiosClient.get, '/products'  );
        // console.log( response.data );
        yield put( downloadProductsSuccess( response.data ) ); // put es como un dispatch
    } catch (error) {
        console.log( error );
        yield put( downloadProductsError() );
    }
}

function* createNewProduct({ payload }) {
    try {
        // Insertar en la API
        // await clienteAxios.post( '/productos', producto );
        const response = yield call( axiosClient.post, '/products', payload.product ) // payload sería el producto que viene

        // Sí todo sale bien, actualizar el State
        yield put( addProductSuccess( response.data ) );

        // Alerta
        // Swal.fire(
        //     'Correcto',
        //     'El producto se agregó correctamente',
        //     'success'
        // );
        Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: 'El producto se agregó correctamente.',
            confirmButtonColor: '#78C2AD',
            confirmButtonText: 'OK',
        });

        // Redireccionar
        payload.history.push('/');
    } catch (error) {
        console.log( error );
        yield put( addProductError( true ) ); // state error pasa a ser true
    }
}

// Selecciona y elimina producto
function* removeProduct({ payload }) {
    try {
        // Elimina de la API
        yield call( axiosClient.delete, `/products/${ payload }` );

        yield put( removeProductSuccess() );

        // Si se elimina, mostrar alerta
        Swal.fire({
            icon: 'success',
            title: 'Eliminado!',
            text: 'El producto se eliminó correctamente.',
            confirmButtonColor: '#78C2AD',
            confirmButtonText: 'OK',
        });
    } catch (error) {
        console.log( error );
        yield put( removeProductError() ); // state error pasa a ser true
    }
}

// Edita un producto en la API y State
function* editOneProduct({ payload }) {
    try {
        yield call( axiosClient.put, `/products/${ payload.product.id }`, payload.product );
        yield put( editProductSuccess( payload.product ) );

        // Redireccionar
        payload.history.push('/');
    } catch (error) {
        console.log( error );
        yield put( editProductError() );
    }
}


// Watchers
export default function* products(){
    yield all([
        takeEvery( START_PRODUCTS_DOWNLOAD, getProducts ),
        takeEvery( ADD_PRODUCT, createNewProduct ),
        takeEvery( GET_PRODUCT_DELETE, removeProduct ),
        takeEvery( START_PRODUCT_EDITION, editOneProduct )
    ]);
}