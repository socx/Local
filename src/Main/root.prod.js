import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import thunk from 'redux-thunk';
import Router from 'components/Router';
import reducer from 'store/reducer';

const finalCreateStore = compose(
    applyMiddleware(thunk, routerMiddleware(hashHistory)),
    persistState('authentication')
)(createStore);

const store = finalCreateStore(reducer, {});


const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router store={store} history={history} location={location} />
    </Provider>
    , document.getElementById('app-container'));
