import React, { useState, useEffect } from "react";

const VoteList = (props) => {

    
    return (
        <React.Fragment>
            {props.monitorVotes.map((monitorData, i) => (
                <div key={monitorData.monitor}>
                    <h3>{monitorData.monitor}</h3>
                    <ul>
                        <p>Total vote: {monitorData.votes.length} </p>
                        {monitorData.votes.map((name, index) => {
                            return <li key={index}>{name} <button type="button" onClick={() => props.deleteDataHandler(i, index)}>Delete</button></li>
                        })
                        }
                    </ul>
                </div>
            ))}
        </React.Fragment>
    );
};

export default VoteList;