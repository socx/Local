import React from 'react';
import {Grid} from 'semantic-ui-react'

import './style.scss'

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid padded>
                <div id="main-container">
                    {this.props.children}
                </div>
            </Grid>
        );
    }
}
