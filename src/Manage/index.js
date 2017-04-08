import React from 'react';
import ManageView from './components/ManageView';

export default class Manage extends React.Component {
    render() {
        return ( 
            <div className="main-grid flex-container">
                <ManageView />
            </div> 
        );
    }
}

