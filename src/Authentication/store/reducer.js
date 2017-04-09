import { createReducer } from 'main/components/Utils';
import constants from './constants';
import { Map, List } from 'immutable';

export const initialState = {    
    isFetching: false,
    hasFailed: false,
    username: '',

    token: '',
    username: '',
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
        return Object.assign({}, state, {
            isFetching: false,
            hasFailed : true
        })
    }

});
