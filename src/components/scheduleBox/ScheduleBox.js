import React from 'react';
import { Link } from 'react-router-dom';

const ScheduleBox = (props) => {
    return (
        <div className="measure bg-white pb3 pr3 pl3 mt0 mb3 pt1">
            <div className="pb2 pb4 pt1 pt2 w-100 bg-grey">
                <Link to='/' className="">
                    <div className="fl f6 fw6 black-80 dib">Series</div>
                    <div className="fr f5 fw4 black-40 dib"> > </div>
                </Link>
            </div>
            <div className="mt2 mb2 f6 fw6 black-80">Match 10 - Location</div>
            <div className="mt2 mb2">
                <div className="f6 black-80 dib">Icon</div>
                <div className="ml2 f6 fw6 black-80 dib">Location</div>
            </div>
            <div className="mt2 mb2">
                <div className="f6 black-80 dib">Icon</div>
                <div className="ml2 f6 fw6 black-80 dib">Location</div>
            </div>
            <div className="flex items-center justify-center flex-column mt3">
                <div className="w-60 tc pt1 pb1 br4 bg-washed-red">15 mins to toss</div>
            </div>
        </div>
    );
}

export default ScheduleBox;