import { createReducer } from 'main/components/Utils';
import constants from './constants';
import { Map, List } from 'immutable';

export const initialState = {
    hasFailed: false,
    token: '',
    username: ''
};

export default createReducer(initialState, {
    [constants.SET_AUTH_TOKEN]: (state, payload) => {
        return { ...state, token: payload.token, username: payload.username };
    },

    [constants.CLEAR_AUTH_TOKEN]: (state, payload) => {
        return { ...state, token: '', username: '' };
    }

});
