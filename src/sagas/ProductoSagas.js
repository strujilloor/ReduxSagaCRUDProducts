import { put, call, takeEvery, all } from 'redux-saga/effects';
import {
    COMENZAR_DESCARGA_PRODUCTOS,
    AGREGAR_PRODUCTO,
    OBTENER_PRODUCTO_ELIMINAR,
    COMENZAR_EDICION_PRODUCTO
} from '../types';
import {
    descargarProductosExitosa,
    descargarProductosError,
    agregarProductoExito,
    agregarProductoError,
    eliminarProductoExito,
    eliminarProductoError,
    editarProductoExito,
    editarProductoError
} from '../actions/productoActions';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// Función que descarga los productos de la base de datos
function* obtenerProductos({ payload }) { // payload es literalmente el payload que viene en la action que dispara esta función
    try {
        // call recibe la función, y los parámetros de esta
        const respuesta = yield call( clienteAxios.get, '/productos'  );
        console.log( respuesta.data );
        yield put( descargarProductosExitosa( respuesta.data ) ); // put es como un dispatch
    } catch (error) {
        console.log( error );
        yield put( descargarProductosError() );
    }
}

function* crearNuevoProducto({ payload }) {
    try {
        // Insertar en la API
        // await clienteAxios.post( '/productos', producto );
        const respuesta = yield call( clienteAxios.post, '/productos', payload.producto ) // payload sería el producto que viene

        // Sí todo sale bien, actualizar el State
        yield put( agregarProductoExito( respuesta.data ) );

        // Alerta
        Swal.fire(
            'Correcto',
            'El producto se agregó correctamente',
            'success'
        );

        // Redireccionar
        payload.history.push('/');
    } catch (error) {
        console.log( error );
        yield put( agregarProductoError( true ) ); // state error pasa a ser true
    }
}

// Selecciona y elimina producto
function* borrarProducto({ payload }) {
    try {
        // Elimina de la API
        yield call( clienteAxios.delete, `/productos/${ payload }` );

        yield put( eliminarProductoExito() );

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
        yield put( eliminarProductoError() ); // state error pasa a ser true
    }
}

// Edita un producto en la API y State
function* editarUnProducto({ payload }) {
    try {
        yield call( clienteAxios.put, `/productos/${ payload.producto.id }`, payload.producto );
        yield put( editarProductoExito( payload.producto ) );

        // Redireccionar
        payload.history.push('/');
    } catch (error) {
        console.log( error );
        yield put( editarProductoError() );
    }
}


// Watchers
export default function* productos(){
    yield all([
        takeEvery( COMENZAR_DESCARGA_PRODUCTOS, obtenerProductos ),
        takeEvery( AGREGAR_PRODUCTO, crearNuevoProducto ),
        takeEvery( OBTENER_PRODUCTO_ELIMINAR, borrarProducto ),
        takeEvery( COMENZAR_EDICION_PRODUCTO, editarUnProducto )
    ]);
}