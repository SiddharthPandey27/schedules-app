import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import ScheduleBox from '../scheduleBox/ScheduleBox';

class Matches extends Component {

    render() {
        const { matchType, status } = this.props;
        console.log(matchType);
        console.log(status);

        return (
            <Query
                query={gql`{
                    schedule {
                        matchType
                        seriesName
                        matchID
                        matchStatus
                        matchNumber
                        matchResult
                        matchScore {
                            teamID
                            teamFullName
                            teamShortName
                            teamScore {
                                runsScored
                            }
                        }
                    }
                }`}
                variables={{ type: matchType, status: status, page: 0 }}
            >
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return `Error! ${error.message}`;
    
                    const schedules = data && data.schedule ? data.schedule : [];
                    let scheduleHtml = [];
                    schedules && schedules.length > 0 && schedules.map((schedule, index) => {
                        scheduleHtml.push(
                            <ScheduleBox 
                                matchSchedule={schedule}
                                key={index}
                            />
                        );
                        return schedule;
                    });
    
                    if (scheduleHtml.length === 0) {
                        scheduleHtml.push('<div className="bg-white pa2">No Matches scheduled</div>');
                    }
    
                    return scheduleHtml;
                }}
            </Query>
        );
    }
}

export default Matches;