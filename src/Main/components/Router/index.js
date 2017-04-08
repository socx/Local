import React                                                        from 'react';
import { Router as ReactRouter, Route, IndexRoute, browserHistory } from 'react-router';
import { routeActions, goBack, goForward }                          from 'react-router-redux';
import { bindActionCreators }                                       from 'redux';
import { connect }                                                  from 'react-redux';
import UrlSearchParams                                              from 'main/components/UrlSearchParams';
import Layout                                                       from 'main/components/Layout';
import ManageView                                                   from 'manage';
import LoginView                                                    from 'authentication/components/LoginView';
import * as authActions                                             from 'authentication/store/actions';


const mapStateToProps = (state, props) => {
    return {
        routing: state.routing
    }
}

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActions, dispatch),
});

export class Router extends React.Component {
    constructor(props) {
        super(props);
    }
    
    requireLogin(nextState, replaceState) {
        if(!this.props.store.getState().authentication.token) {
            browserHistory.push('#/login');
        }
    }

    requireLogout(nextState, replaceState) {
        if(this.props.store.getState().authentication.token) {
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

            if (this.props.store.getState().authentication.token) {
                browserHistory.push(currentLocation.hash);
            }
            else if(username && token)
            {
                this.props.authActions.setAuthToken(token, username);
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
                    <IndexRoute component={LoginView} onEnter={this.requireLogout.bind(this)} />
                    <Route path='login' component={LoginView} onEnter={this.requireLogin.bind(this)} />
                    <Route path='manage' component={ManageView} onEnter={this.requireLogin.bind(this)} />
                </Route>
            </ReactRouter>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
