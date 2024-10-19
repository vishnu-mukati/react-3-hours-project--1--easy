import React ,{useState} from "react";
import VoteForm from "./components/VoteForm/VoteForm";
import TotalVotes from "./components/TotalVotes/TotalVotes";
import VoteList from "./components/VoteList/VoteList";
import VoteContext from "./store/Vote-Context";


function App() {

  const [votes, setVotes] = useState([]);

  const addVote = (vote) => {
      setVotes((prevVotes) => [...prevVotes, vote]);
  };

  const deleteVote = (index) => {
      setVotes((prevVotes) => prevVotes.filter((_, i) => i !== index));
  };

    return (
      <VoteContext.Provider  value={{ votes, addVote, deleteVote }}>
        <TotalVotes/>
         <VoteForm />
         <VoteList/>
      </VoteContext.Provider>
    );
}

export default App;
