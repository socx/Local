import React, {Component}       from 'react';
import { Icon, Menu, Image, Dropdown }    from 'semantic-ui-react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import * as authActions         from 'auth/actions';
import * as mainActions         from 'main/store/actions';
import Branding from '../Branding';
import LogoImg from 'images/logo.png';

const mapStateToProps = (state) => ({
    auth: state.auth,
    routing: state.routing
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(mainActions, dispatch)
};

export class PageHeader extends Component {

    render () {
        return (
            <div className='page-header'>
                <Branding />
                { this.props.auth.token &&
                <div className='user-profile'>
                    <Menu.Menu position='right'>
                        <Dropdown item  text='Username'>
                            <Dropdown.Menu>
                                <Dropdown.Item icon='user' text='Profile' />
                                <Dropdown.Item icon='key' text='Logout' onClick={this.props.resetState} />
                            </Dropdown.Menu>
                        </Dropdown> 
                        <Menu.Item>
                        </Menu.Item>
                    </Menu.Menu>
                </div>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);