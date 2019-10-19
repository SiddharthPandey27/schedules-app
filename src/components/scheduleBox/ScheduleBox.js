import React from 'react';
import { Link } from 'react-router-dom';

const ScheduleBox = (props) => {
    return (
        <div className="fl w-third bg-white pb3 pr3 pl3 mt0 mb3">
            <div className="fl w-100 mt2 mb2 bg-light-black">
                <Link to='/'>
                    <div className="fl f5 fw5 black-80">Series</div>
                    <div className="fr f5 fw3 black-40"> > </div>
                </Link>
            </div>
            <p className="fl w-100 mt2 mb2 f6-ns b black-80">Match 10 - Location</p>
            <div className="w-100 fl mt2 mb2">
                <div className="fl f6-ns b">Icon</div>
                <div className="fl ml2 f6-ns b black-80">Location</div>
            </div>
            <div className="fl w-100 pt2 pb2 tc bg-washed-red">15 mins to toss</div>
        </div>
    );
}

export default ScheduleBox;