
import React, {useState, useEffect} from 'react';
import QuestionContainer from './components/QuestionContainer';
import CreateQuestion from './components/CreateQuestion';
import Points from './components/Points';
import Nav from './components/Nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from './components/About';
import StartPage from './components/StartPage';



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

  console.log(data)
  return (
    <div className="App">
     <Nav/>
     
     
    
    <Switch>
        <Route exact path="/"> 
         <StartPage />
       </Route>
        <Route exact path="/trivia"> 
          <QuestionContainer questions={data} />
       </Route>
       <Route exact path="/about"> 
          <About />
     </Route>
     <Route exact path="/create"> 
          <CreateQuestion setData= {setData} />
     </Route>
    </Switch>




     {/* <QuestionContainer questions={data} points={points} setPoints={setPoints} /> */}
     {/* <CreateQuestion /> */}
   
    </div>
  );
}

export default App;
