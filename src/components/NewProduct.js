import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// Actions de Redux
import { addProduct } from '../actions/productActions';
import { showAlert, hideAlert } from '../actions/alertActions';

// Animate.css
import 'animate.css/animate.min.css'

const NewProduct = ({ history }) => {

    // State del componente
    const [ name, saveName ] = useState('');
    const [ price, savePrice ] = useState(0);

    // utilizar use dispatch y te retorna una función
    const dispatch = useDispatch();

    // Acceder al State del Store
    const loading = useSelector( state => state.products.loading );
    const error = useSelector( state => state.products.error );
    const alert = useSelector( state => state.alert.alert );

    // mandar llamar el action de productoAction
    const addNewProduct = ( product ) => dispatch( addProduct( product, history ) );

    // Cuando el usuario haga submit
    const submitNewProduct = ( event ) => {
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

        // Si no hay errores
        dispatch( hideAlert() );

        // Crear el nuevo producto
        addNewProduct({
            name,
            price
        });

        // Redireccionar 
        // history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Producto
                        </h2>

                        { alert ? <p className={ `animate__animated animate__headShake ${ alert.classes }` }>{ alert.msg }</p> : null }

                        <form onSubmit={ submitNewProduct }>
                            <div className="form-group">
                                <label htmlFor="name">Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="name"
                                    value={ name }
                                    onChange={ e => saveName( e.target.value ) }
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
                                    onChange={ e => savePrice( isNaN(parseInt(e.target.value)) ? e.target.value : parseInt(e.target.value) ) }
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                { loading 
                                ?
                                    <>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Cargando...
                                    </> 
                                :
                                    'Agregar'
                                }
                            </button>
                        </form>

                        { loading ? <p>Cargando...</p> : null }

                        { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
