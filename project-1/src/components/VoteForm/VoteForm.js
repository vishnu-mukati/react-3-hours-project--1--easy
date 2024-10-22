import React, { useState } from "react";

const VoteForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredMonitorName, setEnteredMonitorName] = useState('Ram');
    
   

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const dropdownChangeHandler = (event) => {
        setEnteredMonitorName(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if(enteredName.length>0){
            props.onSaveData(enteredName,enteredMonitorName);
        }
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