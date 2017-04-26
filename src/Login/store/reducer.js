import { createReducer } from 'main/components/Utils';
import constants from './constants';
import { Map, List } from 'immutable';

export const initialState = {    
    isFetching: false,
    hasFailed: false,
    username: '',
    password: '',
    errors: [],
};

export default createReducer(initialState, {

    [constants.LOGIN_ATTEMPT] : (state, payload) => {
        return { ...state, isFetching: true, hasFailed : false }
    },

    [constants.LOGIN_SUCCESSFUL] : (state, payload) => {
        return { ...state, isFetching: false, hasFailed : false, username : payload.username}
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
