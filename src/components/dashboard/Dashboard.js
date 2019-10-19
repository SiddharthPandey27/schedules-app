import React, { Component } from 'react';

import Navbar from '../navbar/Navbar';

class Dashboard extends Component {

    render () {
        return (
            <div className="ph6">
                <div className="fl w-100">
                    <Navbar text='Schedule' />
                    <div className="f1">
                        Dashboard
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;