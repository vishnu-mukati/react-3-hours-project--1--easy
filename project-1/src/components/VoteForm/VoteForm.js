import React, { useState, useContext } from "react";
import VoteContext from "../../store/Vote-Context";

const VoteForm = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredMonitorName, setEnteredMonitorName] = useState('Ram');
    
    const ctx = useContext(VoteContext);

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const dropdownChangeHandler = (event) => {
        setEnteredMonitorName(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        ctx.addVote({ student: enteredName, monitor: enteredMonitorName });
        setEnteredName("");
        setEnteredMonitorName("Ram");
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="student-name">Student Name:</label>
            <input type="text" id="student-name" onChange={nameChangeHandler} value={enteredName} />
            <label htmlFor="monitor-vote">Choose Monitor:</label>
            <select id="monitor-vote" value={enteredMonitorName} onChange={dropdownChangeHandler}>
                <option value="Ram">Ram</option>
                <option value="Shyam">Shyam</option>
                <option value="Babu">Babu</option>
            </select>
            <button type="submit">Vote</button>
        </form>
    );
};

export default VoteForm;