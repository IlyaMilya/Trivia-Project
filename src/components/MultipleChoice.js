import React, {useState, useEffect} from "react";
import Points from "./Points"

function MultipleChoice({answers, correct, points, setPoints}){
  const [totalPoints, setTotalPoints] = useState(0)
  const [correctA] = useState(correct)

  
  //shuffle array function  
  function shuffle(arr) {
    let newArr = []
    let randIndex 
    let working = true
      if (!arr) {
          return
      }
      while (working){   
        randIndex = (Math.floor(Math.random()*25)%arr.length)     
        if (!newArr.includes(arr[randIndex])){
          newArr.push(arr[randIndex])
        }
        if(newArr.length === arr.length){
          working = false
        }
      }
      return newArr
    }

let allAnswer = shuffle(answers)


    //check answer function
    function checkAnswer(e){
        let answer =  e.target.innerHTML
        if (answer == correctA){
           
            document.getElementById(e.target.innerHTML).style.background = 'gold'
            document.getElementById(e.target.innerHTML).style.color = 'purple'
            //alert('you are right!')
        }else{
         // setPoints(points-2)
           document.getElementById(e.target.innerHTML).style.opacity = .2;
           
        }
    }
    
    return (
       <div>
        {  
            allAnswer.map((e)=> {
                return <button id={e} className="btn"  onClick={(el) => checkAnswer(el)}>{e}</button>
            })      
        }   
     </div>
      
      
    );

}

 export default MultipleChoice;
