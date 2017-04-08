import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import manage from 'manage/store/reducer';
import authentication from 'authentication/store/reducer';
import login from 'authentication/components/LoginView/reducer';

export default combineReducers({
    authentication,
    login,
    manage,
    routing: routerReducer
});

