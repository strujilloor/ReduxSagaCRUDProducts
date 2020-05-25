import React, { Fragment, useEffect } from 'react';
import Product from '../components/Product';

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { descargarProductos } from '../actions/productoActions';

const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        // Consultar la API
        const cargarProductos = () => dispatch( descargarProductos() );
        cargarProductos();

        // eslint-disable-next-line
    }, [])

    // Obtener el State
    const productos = useSelector( ( state ) => state.productos.productos );
    const error = useSelector( ( state ) => state.productos.error );
    const cargando = useSelector( ( state ) => state.productos.loading );

    return (
        <Fragment>
            <h2 className="text-center my-5">
                Listado de Productos
            </h2>

            { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null }
            { cargando ? <p className="text-center">Cargando...</p> : null }

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    { productos.length === 0 ? <tr><td>No hay productos</td><td></td><td></td></tr> : (
                        productos.map( producto => (
                            <Product
                                key={ producto.id }
                                product={ producto }
                            />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
    );
};

export default Products;
