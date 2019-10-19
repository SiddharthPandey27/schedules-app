import React from 'react';
import { Link } from 'react-router-dom';

const ScheduleBox = (props) => {
    const { matchSchedule } = props;
    const { matchScore } = matchSchedule;
    return (
        <div className="measure bg-white pb3 pr3 pl3 mt0 mb3 pt1" id={matchSchedule.matchID}>
            <div className="pb2 pb4 pt1 pt2 w-100 bg-grey">
                <Link to='/' className="">
                    <div className="fl f6 fw6 black-80 dib">{matchSchedule.seriesName}</div>
                    <div className="fr f5 fw4 black-40 dib"> > </div>
                </Link>
            </div>
            <div className="mt2 mb2 f6 fw6 black-80">{matchSchedule.matchNumber} - {matchSchedule.matchType}</div>
            {(
                matchScore.map((team) => {
                    return (
                        <div className="mt2 mb2" key={team.teamID}>
                            <div className="f6 black-80 dib">{team.teamShortName}</div>
                            <div className="ml2 f6 fw6 black-80 dib">{team.teamFullName}</div>
                        </div>
                    );
                })
            )}
            <div className="flex items-center justify-center flex-column mt3">
                <div className="w-60 tc pt1 pb1 br4 bg-washed-red">{matchSchedule.matchStatus}</div>
            </div>
        </div>
    );
}

export default ScheduleBox;