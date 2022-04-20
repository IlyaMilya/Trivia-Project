
import React, {useState, useEffect} from 'react';
import QuestionContainer from './components/QuestionContainer';
import CreateQuestion from './components/CreateQuestion';
import Points from './components/Points';
import Nav from './components/Nav';

import './App.css';

function App() {
  
  const [data, setData]=useState([])
 
  // creating point system
  const [points, setPoints] = useState(0)

  

  let request= async()=>{
  let req = await fetch('https://opentdb.com/api.php?amount=10')
  let res = await req.json()
    setData(res.results)
  }
  
  useEffect(() => {
    request()
  }, [])

  return (
    <div className="App">
     <Nav/>
     <QuestionContainer questions={data} points={points} setPoints={setPoints} />
     <CreateQuestion />
   
    </div>
  );
}

export default App;
