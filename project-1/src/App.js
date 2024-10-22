import React, { useState } from "react";
import VoteForm from "./components/VoteForm/VoteForm";
import TotalVotes from "./components/TotalVotes/TotalVotes";
import VoteList from "./components/VoteList/VoteList";


function App() {
  const [monitorVotes, setMonitorVotes] = useState([
    { monitor: 'Ram', votes: [] },
    { monitor: 'Shyam', votes: [] },
    { monitor: 'Babu', votes: [] }
  ]);

  const [votes, setVotes] = useState([]);

  const savedataHandler = (name, monitorname) => {
    let temp = [...monitorVotes]
    temp.forEach((item) => {
      if (item.monitor === monitorname) {
        item.votes.push(name);
      }
    })
    setMonitorVotes(temp);

  }

  const deleteDataHandler = (i, index) => {
    const temp = [...monitorVotes[i].votes];
    temp.splice(index, 1);
    let data = [...monitorVotes]
    data[i].votes = temp

    setVotes(temp);
  }

  let count = 0;
  monitorVotes.forEach((object) => {
    object.votes.map((array) => {
      count = count + 1;
    })
  })
  const totalvotes = count;

  return (
    <React.Fragment>
      <TotalVotes totalvotes={totalvotes} />
      <VoteForm onSaveData={savedataHandler} />
      <VoteList deleteDataHandler={deleteDataHandler} monitorVotes={monitorVotes} />
    </React.Fragment>
  );
}

export default App;
