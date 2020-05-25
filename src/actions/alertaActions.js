import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';


export const mostrarAlerta = ( alerta ) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
});

export const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA,
});