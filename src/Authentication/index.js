import React                                                from 'react'
import PropTypes                                            from 'prop-types';
import { bindActionCreators }                               from 'redux'
import { connect }                                          from 'react-redux'
import { Container, Message, Button, Dimmer, Loader, Input} from 'semantic-ui-react'
import * as actions                                         from './store/actions'

import './style.scss';

const mapStateToProps = (state) => {
    return state.authentication
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export class LoginView extends React.Component {

    constructor(props) {
        super(props)
        this.onLoginClicked = this.onLoginClicked.bind(this)
    }

    onLoginClicked(e) {
        
        e.preventDefault()
        let nextPathname = ''
        let nextQuery = ''
        
        if (this.props.location.state){
            nextPathname = this.props.location.state.nextPathname
            nextQuery = this.props.location.state.nextQuery
        }
        this.props.login(this.props.username, this.props.password)
        return 0
    }

    render () {
        return (
            <Dimmer.Dimmable as={Container} className="login" text>
                <Dimmer active={this.props.isFetching}>
                    <Loader content='authenticating...' />
                </Dimmer>
                <Message 
                    negative
                    icon='lock'
                    header='Access Denied'
                    content='username and/or password invalid'
                    hidden={!this.props.errors || this.props.errors.length == 0}
                />
                <div className="ui raised segment">
                    <form className="ui form">
                        <div className="field">
                            <h1>Login</h1>
                            <label>Username</label>
                            <Input 
                                type="text"
                                placeholder='Username' 
                                disabled={this.props.isFetching}
                                value={this.props.username} 
                                onChange={(e) => this.props.usernameChanged(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <Input 
                                type="password"
                                placeholder='Password' 
                                disabled={this.props.isFetching}
                                value={this.props.password} 
                                onChange={(e) => this.props.passwordChanged(e.target.value)}
                            />
                        </div>
                        <br/>
                        <Button content='Login' 
                            icon='right arrow circle' 
                            labelPosition='right'
                            className={`${(this.props.username.length > 2) && (this.props.password.length > 2) ? 'ui submit button primary' : 'ui submit disabled button'}`}
                            onClick={this.onLoginClicked}
                        />
                    </form>
                </div>
            </Dimmer.Dimmable>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
