

import React, {useState, useEffect} from 'react';
import QuestionContainer from './components/QuestionContainer';
import CreateQuestion from './components/CreateQuestion';
import Points from './components/Points';

import './App.css';

function App() {
  
  const [data, setData]=useState([])
 
  // creating point system
  const [points, setPoints] = useState(0)

  function test(){
    console.log("test passed")
  }




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
     <Points points={points}/>
     <QuestionContainer questions={data} points={points} setPoints={setPoints} />
     <CreateQuestion />
     
     
      
    </div>
  );
}

export default App;
