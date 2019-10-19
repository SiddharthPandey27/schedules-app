import React, { Component } from 'react';

import Navbar from '../navbar/Navbar';
import Matches from '../matches/Matches';

class Dashboard extends Component {

    state = {
        matchType: 'All',
        status: 'upcoming'
    };

    manageFilters = (e) => {
        console.log(e.target.id);
        this.setState({
            [e.target.name]: e.target.id,
        });
    }

    render () {
        const { matchType, status } = this.state;
        return (
            <div className="ph2">
                <div className="w-100">
                    <Navbar text='Schedule' />
                    <div className="f6 bg-white pt3 pb0">
                        <div className="flex items-center justify-center flex-column mt2 mb2 tc">
                            <div className='cf dib'>
                                <div className="b b--silver bb bg-washed-white bl br--left br2 bt dib f6 fl link ph2 pv1 red" name="status" id="upcoming" onClick={this.manageFilters}>Upcoming</div>
                                <div className="b--silver b ba bg-light-white dib f6 fl hover-bg-white hover-red hover-b-silver link ph2 pv1 silver" name="status" id="running" onClick={this.manageFilters}>Running</div>
                                <div className="b--silver b ba bg-light-white dib f6 fl hover-bg-white hover-red hover-b-silver link ph2 pv1 silver br--right br2" name="status" id="completed" onClick={this.manageFilters}>Completed</div>
                            </div>
                        </div>
                        <nav className="pa3 pa4-ns pb0">
                            <div className="tc pb2">
                                <div className="link dim gray f6 f5-ns dib mr5" name="matchType" id="All" onClick={this.manageFilters}>All</div>
                                <div className="link dim gray f6 f5-ns dib mr4" name="matchType" id="International" onClick={this.manageFilters}>International</div>
                                <div className="link dim gray f6 f5-ns dib" name="matchType" id="Domestic" onClick={this.manageFilters}>Domestic</div>
                            </div>
                        </nav>
                    </div>
                    <Matches 
                        matchType={matchType}
                        status={status}
                    />
                </div>
            </div>
        );
    }
}

export default Dashboard;