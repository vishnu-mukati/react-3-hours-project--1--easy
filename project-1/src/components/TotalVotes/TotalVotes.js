import React, { useContext } from "react";
import VoteContext from "../../store/Vote-Context";

const TotalVotes = () => {
    const { votes } = useContext(VoteContext);
    const uniqueMonitors = ["Ram", "Shyam", "Babu"];

    let overallTotal = 0;
    
    return (
        <React.Fragment>
            <h2>Class Monitor Votes</h2>
            <ul>
                {uniqueMonitors.map((monitor) => {
                    const count = votes.filter(vote => vote.monitor === monitor).length;
                    overallTotal += count;
                    return (
                        <li key={monitor}>
                            {monitor}: {count} votes
                        </li>
                    );
                })}
            </ul>
            <h3>Total Votes: {overallTotal}</h3>
        </React.Fragment>
    );
};

export default TotalVotes;