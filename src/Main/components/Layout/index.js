import React from 'react';
import {Container } from 'semantic-ui-react';
import PageHeader from  '../PageHeader';
import SideBar from  '../SideBar';


import './style.scss'

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='main-container' >
                <PageHeader />
                <div className="page-content">
                    <SideBar />
                    {this.props.children}
                </div>
            </div>
        );
    }
}
