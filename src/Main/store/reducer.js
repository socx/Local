import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as auth from 'auth/reducer';
import * as login from 'login/store/reducer';
import * as manage from 'manage/store/reducer';
import * as members from 'members/store/reducer';

const initialState = {
    auth : auth.initialState,
    login : login.initialState,
    manage : manage.initialState,
    members : members.initialState,
    routing: {}
};

const reducers = combineReducers({
    auth : auth.default,
    login : login.default,
    manage : manage.default,
    members : members.default,
    routing: routerReducer
});

export default function(state, action) {
    return (action.type === 'RESET_STATE') ? initialState : reducers(state, action);
}

