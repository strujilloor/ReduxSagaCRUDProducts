import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types';


export const showAlert = ( alert ) => ({
    type: SHOW_ALERT,
    payload: alert
});

export const hideAlert = () => ({
    type: HIDE_ALERT,
});