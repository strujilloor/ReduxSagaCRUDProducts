import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// REDUX
import { useDispatch } from 'react-redux'
import { obtenerProductoEliminar, obtenerProductoEditar } from '../actions/productoActions'

const Product = ({ product }) => {

    const { name, price, id } = product;

    const dispatch = useDispatch();
    const history = useHistory(); // habilitar history para redirección 

    // Confirmar si desea eliminarlo
    const confirmarEliminarProducto = ( id ) => {
        // Preguntar al usuario
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un producto que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#78C2AD',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonColor: '#FF7851',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                // Pasarlo al Action
                dispatch( obtenerProductoEliminar( id ) );
            }
        });
    }

    // Función que redirige de forma programada
    const redireccionarEdicion = producto => {
        dispatch( obtenerProductoEditar( producto ) )
        history.push(`/productos/editar/${ producto.id }`);
    }

    return (
        <tr>
            <td>{ name }</td>
            <td><span className="font-weight-bold">$ { price } </span></td>
            <td className="acciones">
                <button 
                    type="button"
                    onClick={ () => redireccionarEdicion( product ) }
                    className="btn btn-primary mr-2">
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={ () => confirmarEliminarProducto( id ) }
                >Eliminar</button>
            </td>
        </tr>
    );
};

export default Product;
