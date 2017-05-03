import React                                                        from 'react';
import { Router as ReactRouter, Route, IndexRoute, browserHistory } from 'react-router';
import { routeActions, goBack, goForward }                          from 'react-router-redux';
import { bindActionCreators }                                       from 'redux';
import { connect }                                                  from 'react-redux';
import UrlSearchParams                                              from 'main/components/UrlSearchParams';
import Layout                                                       from 'main/components/Layout';
import ManageView                                                   from 'manage';
import Login                                                        from 'login';
import * as authActions                                             from 'auth/actions';


const mapDispatchToProps = dispatch => {
    return bindActionCreators(authActions, dispatch)
}

class Router extends React.Component {
    constructor(props) {
        super(props);
    }
    
    requireLogin(nextState, replaceState) {
        if(!this.props.store.getState().auth.token) {
            browserHistory.push('#/login');
        }
    }

    requireLogout(nextState, replaceState) {
        if(this.props.store.getState().auth.token) {
          browserHistory.push('#/manage');
        }
    }

    componentWillMount()
    {
        let currentLocation = this.props.location;

        if(currentLocation.hash)
        {
            let queryParams = UrlSearchParams(currentLocation.search);
            let username = queryParams.get('username');
            let token = queryParams.get('token');

            if (this.props.store.getState().auth.token) {
                browserHistory.push(currentLocation.hash);
            }
            else if(username && token)
            {
                this.props.setAuthToken(token, username);
                browserHistory.push(currentLocation.hash);
            }
            else {
                browserHistory.push('#/login');
            }
        }
    }

     render() {
        return (
            <ReactRouter history={this.props.history}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Login} onEnter={this.requireLogout.bind(this)} />
                    <Route path='login' component={Login} onEnter={this.requireLogout.bind(this)} />
                    <Route path='manage' component={ManageView} onEnter={this.requireLogin.bind(this)} />
                </Route>
            </ReactRouter>
        );
    }
}

export default connect(null, mapDispatchToProps)(Router);
