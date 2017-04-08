import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//import manage from 'manage/reducer';
//import dashboard from 'dashboard/reducer';

export default combineReducers({
    routing: routerReducer
});

