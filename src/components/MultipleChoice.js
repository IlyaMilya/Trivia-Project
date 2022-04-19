import React from "react";

function MultipleChoice({answers, correct}){
  
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

    //check answer function
    function checkAnswer(e){
        console.log(e)
    }


    return (
       <div>
        {
            shuffle(answers).map((e)=> {
                return <button class="btn" style={{ background: 'lightgreen' }} onClick={(e) => checkAnswer(e)}> {e} </button>
            }) 
        }
     </div>
      
      
    );

}

 export default MultipleChoice;
