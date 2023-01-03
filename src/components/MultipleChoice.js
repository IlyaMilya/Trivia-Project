import React, {useState, useEffect} from "react";
import Points from "./Points"

function MultipleChoice({answers, correct, points, setPoints}){
  const [totalPoints, setTotalPoints] = useState(0)
  
 
  const correctChoice = correct

  
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

 console.log(allAnswer, "please give me an array")

 function parsed(e){
   for (var i = 0; i < allAnswer.length; i++) {
  (e[i].replaceAll("&#039;", "'").replaceAll("&quot;", '"').replaceAll("&eacute;", "é").replaceAll("&amp;", "&"))
   }
 }

 parsed(allAnswer)
   



    //check answer function
    function checkAnswer(choice){
        // e.replaceAll("&#039;", "'").replaceAll("&quot;", '"').replaceAll("&eacute;", "é")
        let answer =  choice.target.innerHTML
        if (answer == correctChoice){
           
            document.getElementById(choice.target.innerHTML).style.background = 'gold'
            document.getElementById(choice.target.innerHTML).style.color = 'purple'

            alert('you are right!')
        }else{
         // setPoints(points-2)
           document.getElementById(choice.target.innerHTML).style.opacity = .2;
           
        }
    }
    
    return (
       <div>
        {    allAnswer.map((e)=> {
          
        return <button id={e.replaceAll("&#039;", "'").replaceAll("&quot;", '"').replaceAll("&eacute;", "é").replaceAll("&amp;", "&")} className="btn"  onClick={(el) => checkAnswer(el)}>{e.replaceAll("&#039;", "'").replaceAll("&quot;", '"').replaceAll("&eacute;", "é").replaceAll("&amp;", "&")}</button>
            })      
        }   
     </div>
      
      
    );

}

 export default MultipleChoice;
