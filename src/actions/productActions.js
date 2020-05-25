import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_PRODUCTS_DOWNLOAD,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    GET_PRODUCT_DELETE,
    PRODUCT_REMOVED_SUCCESS,
    PRODUCT_REMOVED_ERROR,
    GET_PRODUCT_EDIT,
    EDITED_PRODUCT_SUCCESS,
    EDITED_PRODUCT_ERROR,
    START_PRODUCT_EDITION
} from '../types';

// AGREGAR PRODUCTO
export const addProduct = ( product, history ) => ({
    type: ADD_PRODUCT,
    payload: {
        product,
        history
    }
});

// si producto se guarda en la base de datos
export const addProductSuccess = ( product ) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

// si hubo un error
export const addProductError = ( state ) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
});


// OBTENER PRODUCTOS
export const downloadProducts = () => ({
    type: START_PRODUCTS_DOWNLOAD,
    payload: true
});

export const downloadProductsSuccess = ( products ) =>({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
});

export const downloadProductsError = () =>({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true
});


// ELIMINAR PRODUCTO
export const getProductDelete = ( id ) => ({
    type: GET_PRODUCT_DELETE,
    payload: id
});

export const removeProductSuccess = () => ({
    type: PRODUCT_REMOVED_SUCCESS
});

export const removeProductError = () => ({
    type: PRODUCT_REMOVED_ERROR,
    payload: true
});


// OBTENER PRODUCTO A EDITAR: Colocar Producto en edición
export const getProductEdit = ( product ) => ({
    type: GET_PRODUCT_EDIT,
    payload: product
});


// EDITAR PRODUCTO
export const editProduct = ( product, history ) => ({
    type: START_PRODUCT_EDITION,
    payload: {
        product,
        history
    }
});

export const editProductSuccess = ( product ) => ({
    type: EDITED_PRODUCT_SUCCESS,
    payload: product
});

export const editProductError = () => ({
    type: EDITED_PRODUCT_ERROR,
    payload: true
});