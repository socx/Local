import { createReducer }     from 'main/components/Utils'
import constants from './constants'

export const initialState = {
    isFetching: false,
    hasFailed: false,
    username: ''
}

export default createReducer(initialState, {
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

})
