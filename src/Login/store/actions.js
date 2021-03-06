import { push } from 'react-router-redux';
import apiConfig from 'main/components/Settings';
import * as authActions from 'auth/actions';
import constants from './constants';

export const usernameChanged = (username) => {
    return{ type : constants.USERNAME_CHANGED, payload: { username }}
}

export const passwordChanged = (password) => {
    return{ type : constants.PASSWORD_CHANGED, payload: { password }}
}

export function login(username, password) {
    
    return (dispatch) => {
        if(apiConfig.DEMO_MODE) {
            if(password === 'denyme'){
                dispatch({ type: constants.LOGIN_FAILED, payload: {message : 'Login failed'} });
                return;
            }

            let payload = { username: username, token: Math.random().toString(18).substr(2, 32) };
            dispatch({ type: constants.LOGIN_SUCCESSFUL, payload });
            dispatch(authActions.setAuthToken(payload.token, payload.username));
            dispatch(push('/members'));
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
                        dispatch(push('/members'));

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
