import React, { Component } from 'react';

import Navbar from '../navbar/Navbar';
import ScheduleBox from '../scheduleBox/ScheduleBox';

class Dashboard extends Component {

    render () {
        return (
            <div className="ph6">
                <div className="fl w-100">
                    <Navbar text='Schedule' />
                    <div className="f3 bg-white pt3 pb3 pl5">
                        Dashboard
                    </div>
                    <ScheduleBox />
                    <ScheduleBox />
                    <ScheduleBox />
                    <ScheduleBox />
                    <ScheduleBox />
                    <ScheduleBox />
                </div>
            </div>
        );
    }
}

export default Dashboard;