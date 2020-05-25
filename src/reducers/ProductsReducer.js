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
} from '../types';


// Cada reducer tiene su propio state
const initialState = {
    products: [],
    error: null,
    loading: false,
    productDelete: null,
    productEdit: null
}

export default function ( state = initialState, action ) {
    switch( action.type ) {

        case START_PRODUCTS_DOWNLOAD: // ya que las dos actions hacen lo mismo
        case ADD_PRODUCT: 
            return { // imagina este return como un setState
                ...state,
                loading: true // Comienza a cargar la acción de agregar producto
            }

        case ADD_PRODUCT_SUCCESS: 
            return {
                ...state,
                loading: false, // termina la acción de agregar producto
                products: [ ...state.products, action.payload ] // agrega el producto que viene de la acción a la lista de productos
            }
        
        case ADD_PRODUCT_ERROR:
        case DOWNLOAD_PRODUCTS_ERROR:
        case PRODUCT_REMOVED_ERROR:
        case EDITED_PRODUCT_ERROR:
            return {
                ...state,
                loading: false, // termina la acción de agregar producto
                error: action.payload,
                productEdit: null
            }

        case DOWNLOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }

        case GET_PRODUCT_DELETE:
            return {
                ...state,
                productDelete: action.payload
            }

        case PRODUCT_REMOVED_SUCCESS:
            return {
                ...state,
                productos: state.products.filter( product => product.id !== state.productDelete ),
                productDelete: null
            }

        case GET_PRODUCT_EDIT:
            return{
                ...state,
                productEdit: action.payload
            }

        case EDITED_PRODUCT_SUCCESS:
            return{
                ...state,
                productEdit: null,
                productos: state.products.map( product =>
                    product.id === action.payload.id ? product = action.payload : product
                )
            }

        default:
            return state;
    }
}

