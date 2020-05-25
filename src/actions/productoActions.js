import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
    COMENZAR_EDICION_PRODUCTO
} from '../types';

// AGREGAR PRODUCTO
export const agregarProducto = ( producto, history ) => ({
    type: AGREGAR_PRODUCTO,
    payload: {
        producto,
        history
    }
});

// si producto se guarda en la base de datos
export const agregarProductoExito = ( producto ) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

// si hubo un error
export const agregarProductoError = ( estado ) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});


// OBTENER PRODUCTOS
export const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

export const descargarProductosExitosa = ( productos ) =>({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

export const descargarProductosError = () =>({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});


// ELIMINAR PRODUCTO
export const obtenerProductoEliminar = ( id ) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});

export const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
});

export const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
});


// OBTENER PRODUCTO A EDITAR: Colocar Producto en edición
export const obtenerProductoEditar = ( producto ) => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
});


// EDITAR PRODUCTO
export const editarProducto = ( producto, history ) => ({
    type: COMENZAR_EDICION_PRODUCTO,
    payload: {
        producto,
        history
    }
});

export const editarProductoExito = ( producto ) => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
});

export const editarProductoError = () => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
});