import { push } from 'react-router-redux';
import constants from './constants';


export function setAuthToken(token, username) {
    return {
        type: constants.SET_AUTH_TOKEN,
        payload: { token: token, username: username }
    };
}

export function clearAuthToken() {
    return (dispatch) => {
        dispatch({ type: constants.CLEAR_AUTH_TOKEN })
        dispatch(mainActions.resetState())
    };
}

