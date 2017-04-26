import React from 'react';
import {Container } from 'semantic-ui-react';
import PageHeader from  '../PageHeader';


import './style.scss'

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container id='main-container' >
                <PageHeader id='page-header' />
                <div id="page-body">
                    {this.props.children}
                </div>
            </Container>
        );
    }
}
