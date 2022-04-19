

import React, {useState, useEffect} from 'react';
import QuestionContainer from './components/QuestionContainer';
import CreateQuestion from './components/CreateQuestion';
import './App.css';

function App() {
  
  const [data, setData]=useState([])

  let request= async()=>{
  let req = await fetch('https://opentdb.com/api.php?amount=10')
  let res = await req.json()
   // console.log(res.results)
    setData(res.results)
  }
  
  useEffect(() => {
    request()
  }, [])

//  data.map((e)=>{
//   console.log(e.category) 

//  })

 


 
  



  return (
    <div className="App">
     <QuestionContainer questions={data} />
     <CreateQuestion />
     
     
      
    </div>
  );
}

export default App;
