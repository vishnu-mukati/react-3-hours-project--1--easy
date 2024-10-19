import React ,{createContext} from "react";

 const VoteContext = React.createContext({
    votes: [], 
    addVote: () => {},
    deleteVote: () => {} 
})

export default VoteContext;