import React                    from 'react'
import PropTypes                from 'prop-types';
import { bindActionCreators }   from 'redux'
import { connect }              from 'react-redux'
import * as actions             from './actions'
import './style.scss';

const mapStateToProps = (state) => ({
    authentication : state.authentication,
    login : state.login
})

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(actions, dispatch)
})

export class LoginView extends React.Component {
    static contextTypes = {
        location: PropTypes.object,
    }

    constructor(props) {
        super(props)
        this.state = {username: '', password: ''}
        this.onLoginClicked = this.onLoginClicked.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    onLoginClicked(e) {
        
        e.preventDefault()
        let nextPathname = ''
        let nextQuery = ''
        
        if (this.props.location.state){
            nextPathname = this.props.location.state.nextPathname
            nextQuery = this.props.location.state.nextQuery
        }
        this.props.actions.login(this.state.username, this.state.password)
        return 0
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    render () {
        let loginButtonCss = (this.state.username.length > 2) && (this.state.password.length > 2) ? 'ui submit button primary' : 'ui submit disabled button'
        let loginButton = <button className={loginButtonCss} id="login-button" onClick={this.onLoginClicked}>Login<i className="arrow circle right icon"></i></button>
        let textBoxCss = 'ui input'

        if(this.props.login.isFetching) {
            loginButtonCss = 'ui loading button'
            loginButton = <button className={loginButtonCss} id="login-button">Login<i className="arrow circle right icon"></i></button>
            textBoxCss = 'ui disabled input'
        }

        return (
            <div className="ui text container login">
                <div>Put error message here </div>
                <div className="ui raised segment">
                    <form className="ui form">
                        <div className="field">
                            <h1>Login</h1>
                            <label>Username</label>
                            <input type="text" id="username-textbox" className={textBoxCss} name="username" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange}/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" id="password-textbox" className={textBoxCss} name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                        </div>
                        <br/>
                        {loginButton}
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
