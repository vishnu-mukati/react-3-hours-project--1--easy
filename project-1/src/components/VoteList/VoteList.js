import React, { useContext } from "react";
import VoteContext from "../../store/Vote-Context";

const VoteList = () => {
    const { votes, deleteVote } = useContext(VoteContext);
    const uniqueMonitors = ["Ram", "Shyam", "Babu"];

    return (
        <div>
            {uniqueMonitors.map((monitor) => {
                const monitorVotes = votes.filter(vote => vote.monitor === monitor);
                return (
                    <div key={monitor}>
                        <ul>
                            {monitorVotes.map((vote, index) => (
                                <li key={index}>
                                    {vote.student}
                                    <h4>{monitor}: {monitorVotes.length} votes</h4>
                                    <button onClick={() => deleteVote(index)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default VoteList;