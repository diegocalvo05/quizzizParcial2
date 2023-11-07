import { useState } from "react";
import Search from "./components/search/search";
import { getQuestionBank } from "./services/trivia.services"


function App() {

  const [opt, setOpt] = useState();

  const getOpt = (opt)=>{
    setOpt(opt);
  }

  return (
    <>
      <Search getOpt={getOpt}/>
    </>
  )

}

export default App
