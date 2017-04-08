import React                                                        from 'react';
import { Router as ReactRouter, Route, IndexRoute, browserHistory } from 'react-router';
import { routeActions, goBack, goForward }                          from 'react-router-redux';
import { bindActionCreators }                                       from 'redux';
import { connect }                                                  from 'react-redux';
import UrlSearchParams                                              from 'main/components/UrlSearchParams';
import Layout                                                       from 'main/components/Layout';
import Manage                                                       from 'manage';
import * as actions                                                 from './actions';
import * as constants                                               from './constants';

const mapStateToProps = (state, props) => {
    return {
        routing: state.routing
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export class Router extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount()
    {
        let currentLocation = this.props.location;

        if(currentLocation.hash)
        {
            browserHistory.push('#/manage');
        }
    }

     render() {
        return (
            <ReactRouter history={this.props.history}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Manage}  />
                    <Route path='manage' component={Manage} />
                </Route>
            </ReactRouter>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
