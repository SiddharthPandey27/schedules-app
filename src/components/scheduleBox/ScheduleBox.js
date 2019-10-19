import React from 'react';
import { Link } from 'react-router-dom';

const ScheduleBox = (props) => {
    return (
        <div className="fl measure bg-white pb3 pr3 pl3 mt0 mb3">
            <Link to='/' className="fl w-100 mt2 mb2 bg-light-black">
                <div>
                    <div className="fl f6 fw6 black-80">Series</div>
                    <div className="fr f5 fw4 black-40"> > </div>
                </div>
            </Link>
            <p className="fl mt2 mb2 f6 fw6 black-80">Match 10 - Location</p>
            <div className="w-100 fl mt2 mb2">
                <div className="fl f6 black-80">Icon</div>
                <div className="fl ml2 f6 fw6 black-80">Location</div>
            </div>
            <div className="fl w-100 pt2 pb2 tc bg-washed-red">15 mins to toss</div>
        </div>
    );
}

export default ScheduleBox;