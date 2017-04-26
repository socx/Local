import React, {Component}       from 'react';
import { Icon, Menu, Dropdown }    from 'semantic-ui-react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux'
import * as authActions         from 'auth/actions';
import * as mainActions         from 'main/store/actions';
import Branding from '../Branding';

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
           <Menu>
                <Menu.Item>                    
                    <Branding />
                </Menu.Item>
                { this.props.auth.token &&
                <Menu.Menu position='right'>
                    <Menu.Item name='mail'>
                        <Icon name='mail' />
                    </Menu.Item>
                    <Menu.Item name='bell'>
                        <Icon name='bell' />
                    </Menu.Item>
                    <Dropdown item  text='Username'>
                        <Dropdown.Menu>
                            <Dropdown.Item icon='user' text='Profile' />
                            <Dropdown.Item icon='key' text='Logout' onClick={this.props.resetState} />
                        </Dropdown.Menu>
                    </Dropdown>                    
                    
                </Menu.Menu>
                }
            </Menu>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);