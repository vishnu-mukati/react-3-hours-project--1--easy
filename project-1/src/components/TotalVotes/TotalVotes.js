import React from "react"

const TotalVotes = (props) => {
    return (
        <React.Fragment>

        <h1>Class Monitor Vote</h1>
        <p>Total Votes: {props.totalvotes}</p>
        </React.Fragment>
    );
}
export default TotalVotes;