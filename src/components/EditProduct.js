import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct } from '../actions/productActions';
import { showAlert, hideAlert } from '../actions/alertActions';
import { useHistory } from 'react-router-dom'

const EditProduct = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    // Nuevo State de producto
    const [ product, saveProduct ] = useState({
        name: '',
        price: ''
    });
    const { name, price } = product;
    
    // producto a editar
    const productFromState = useSelector( state => state.products.productEdit );

    const alert = useSelector( state => state.alert.alert );
    
    // Llenar el State automáticamente
    useEffect( () => {
        if (productFromState) {
            saveProduct( productFromState );
        }
    }, [productFromState] );
    
    // Leer los datos del formulario
    const onChangeForm = ( event ) => {

        const value = ( event.target.name === 'price' ) 
            ? parseInt( event.target.value ) 
            : event.target.value;

        saveProduct({
            ...product,
            [event.target.name]: value
        });
    }
    
    const submitEditProduct = ( event ) => {
        event.preventDefault();

        // Validar formulario
        if ( name.trim() === '' || price <= 0 || isNaN( price ) ) {
            const response = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase'
            };
            dispatch( showAlert( response ) );
            return;
        }
        dispatch( hideAlert() );
        dispatch( editProduct( product, history ) );
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
                            onSubmit={ submitEditProduct }
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
