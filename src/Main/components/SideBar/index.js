import React, {Component}       from 'react';
import { Icon, Menu, Dropdown }    from 'semantic-ui-react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux'
import * as authActions         from 'auth/actions';
import * as mainActions         from 'main/store/actions';


const mapStateToProps = (state) => ({
    auth: state.auth,
    routing: state.routing
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(mainActions, dispatch)
};

export class SideBar extends Component {

    render () {
        return (           
            <div className={`page-side-bar ${this.props.auth.token ? '' : 'hidden' }`}>
                <div className='nav-item'>
                </div>

                <div className='nav-item'>
                    <a><Icon name='line chart' /> Dashboard </a>
                </div>
                <div className='nav-item'>
                     <a><Icon name='group' />
                    Members
                    </a>
                </div>
                <div className='nav-item'>
                     <a><Icon name='home' />
                    Events
                    </a>
                </div>
                <div className='nav-item'>
                     <a><Icon name='bullhorn' />
                    Communications
                    </a>
                </div>
                <div className='nav-item'>
                     <a><Icon name='pound' />
                    Finances
                    </a>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);