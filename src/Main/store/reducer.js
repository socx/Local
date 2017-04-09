import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import manage from 'manage/store/reducer';
import authentication from 'authentication/store/reducer';

export default combineReducers({
    authentication,
    manage,
    routing: routerReducer
});

