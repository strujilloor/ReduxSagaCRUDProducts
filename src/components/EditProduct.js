import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProducto } from '../actions/productoActions';
import { mostrarAlerta, ocultarAlerta } from '../actions/alertaActions';
import { useHistory } from 'react-router-dom'

const EditProduct = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    // Nuevo State de producto
    const [ producto, guardarProducto ] = useState({
        name: '',
        price: ''
    });
    const { name, price } = producto;
    
    // producto a editar
    const productFromState = useSelector( state => state.productos.productoEditar );

    const alert = useSelector( state => state.alerta.alerta );
    
    // Llenar el State automáticamente
    useEffect( () => {
        if (productFromState) {
            guardarProducto( productFromState );
        }
    }, [productFromState] );
    
    // Leer los datos del formulario
    const onChangeForm = ( event ) => {

        const value = ( event.target.name === 'price' ) 
            ? parseInt( event.target.value ) 
            : event.target.value;

        guardarProducto({
            ...producto,
            [event.target.name]: value
        });
    }
    
    const submitEditarProducto = ( event ) => {
        event.preventDefault();

        // Validar formulario
        if ( name.trim() === '' || price <= 0 || isNaN( price ) ) {
            const respuesta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase'
            };
            dispatch( mostrarAlerta( respuesta ) );
            return;
        }
        dispatch( ocultarAlerta() );
        dispatch( editarProducto( producto, history ) );
    }
    
    if ( !productFromState ) return null; // cuando no venga producto del estado no cargue nada, y no se generen errores
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        { alert ? <p className={ `animate__animated animate__headShake ${alert.classes}` }>{ alert.msg }</p> : null }

                        <form
                            onSubmit={ submitEditarProducto }
                        >
                            <div className="form-group">
                                <label htmlFor="name">Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="name"
                                    value={ name }
                                    onChange={ onChangeForm }
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="price"
                                    value={ price }
                                    onChange={ onChangeForm }
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
