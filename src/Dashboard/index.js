import React from 'react';
import DashboardView from './components/DashboardView';

export default class Dashboard extends React.Component {
    render() {
        return ( 
            <div className="main-grid flex-container">
                <DashboardView />
            </div> 
        );
    }
}

