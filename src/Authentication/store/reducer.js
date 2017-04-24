import { createReducer } from 'main/components/Utils';
import constants from './constants';
import { Map, List } from 'immutable';

export const initialState = {    
    isFetching: false,
    hasFailed: false,

    token: '',
    username: '',
    password: '',
    errors: [],
};

export default createReducer(initialState, {
    [constants.SET_AUTH_TOKEN]: (state, payload) => {
        return {
            ...state,
            token: payload.token,
            username: payload.username
        };
    },

    [constants.CLEAR_AUTH_TOKEN]: (state, payload) => {
        return {
            ...state,
            token: '',
            username: ''
        };
    },

    [constants.LOGIN_ATTEMPT] : (state, payload) => {
        return Object.assign({}, state, {
            isFetching: true,
            hasFailed : false
        })
    },

    [constants.LOGIN_SUCCESSFUL] : (state, payload) => {
        return Object.assign({}, state, {
            isFetching: false,
            hasFailed : false,
            username : payload.username
        })
    },

    [constants.LOGIN_FAILED] : (state, payload) => {
        let errors = state.errors;
        errors.push(payload.message);
        return  { ...state, isFetching: false, hasFailed : true, errors }
    },

    [constants.USERNAME_CHANGED] : (state, payload) => {
        return {...state, username : payload.username}
    },

    [constants.PASSWORD_CHANGED] : (state, payload) => {
        return {...state, password : payload.password}
    }

});
