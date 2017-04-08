import React from 'react';

//import 'node_modules/semantic-ui-css/semantic.css';
//import 'node_modules/semantic-ui-css/semantic';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui padded grid">
                <div id="main-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
