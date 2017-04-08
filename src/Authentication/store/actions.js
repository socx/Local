import apiConfig from 'main/components/Settings';
import * as mainActions from 'main/store/actions';
import constants from './constants';
import { push } from 'react-router-redux';

export function setAuthToken(token, username) {
    return {
        type: constants.SET_AUTH_TOKEN,
        payload: {
            token: token,
            username: username
        }
    };
}

export function clearAuthToken() {
    return (dispatch) => {
        dispatch({ type: constants.CLEAR_AUTH_TOKEN })
        dispatch(mainActions.resetState())
    };
}

export function login(username, password) {
    
    return (dispatch) => {
        if(apiConfig.DEMO_MODE) {
            let payload = { username: username, token: Math.random().toString(18).substr(2, 32) };
            dispatch({ type: constants.LOGIN_SUCCESSFUL, payload });
            dispatch(setAuthToken(payload.token, payload.username));
            dispatch(push('/manage'));
        }  else {
            dispatch({ type: constants.LOGIN_ATTEMPT, username, password });

            let url = apiConfig.AUTHENTICATION_URL + 'api/v1/authentication/generate/token';
            fetch(url,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'UserId': username,
                    'Password': password
                }
            })
            .then(function(response) {
                if(response.ok) {
                    response.text().then(authToken => {
                        let payload = { username: username, token: authToken };
                        dispatch({ type: constants.LOGIN_SUCCESSFUL, payload });
                        dispatch(setAuthToken(payload.token, payload.username));
                        dispatch(push('/manage'));

                    });
                }
                else
                    dispatch({ type: constants.LOGIN_FAILED, payload: 'Login failed' });
            })
            .catch(function(err){
                dispatch({ type: constants.LOGIN_FAILED, payload: 'unexpected login error' });
            })
        }
    }
}
