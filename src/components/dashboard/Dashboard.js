import React, { Component } from 'react';

import Navbar from '../navbar/Navbar';
import ScheduleBox from '../scheduleBox/ScheduleBox';

class Dashboard extends Component {

    render () {
        return (
            <div className="ph2">
                <div className="w-100">
                    <Navbar text='Schedule' />
                    <div className="f6 bg-white pt3 pb0">
                        <div className="flex items-center justify-center flex-column mt2 mb2 tc">
                            <div class='cf dib'>
                                <a class="b b--silver bb bg-washed-white bl br--left br2 bt dib f6 fl link ph2 pv1 red" href="#0">Upcoming</a>
                                <a class="b--silver b ba bg-light-white dib f6 fl hover-bg-white hover-red hover-b-silver link ph2 pv1 silver" href="#0">Running</a>
                                <a class="b--silver b ba bg-light-white dib f6 fl hover-bg-white hover-red hover-b-silver link ph2 pv1 silver br--right br2" href="#0">Completed</a>
                            </div>
                        </div>
                        <nav class="pa3 pa4-ns pb0">
                            <div class="tc pb2">
                                <a class="link dim gray f6 f5-ns dib mr5" href="#" title="Home">All</a>
                                <a class="link dim gray f6 f5-ns dib mr4" href="#" title="About">International</a>
                                <a class="link dim gray f6 f5-ns dib" href="#" title="Store">Domestic</a>
                            </div>
                        </nav>
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