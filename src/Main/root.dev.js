import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { hashHistory, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import Router from 'main/components/Router';
import reducer from 'main/store/reducer';

import globalStyles from '../assets/global.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const finalCreateStore = composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(hashHistory)),
    persistState('auth')
)(createStore);

function getDebugSessionKey() {
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    return (matches && matches.length > 0)? matches[1] : null;
}

const store = finalCreateStore(reducer, {});

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router store={store} history={history} location={location} />
    </Provider>
    , document.getElementById('app-container'))
