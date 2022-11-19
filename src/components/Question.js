import React from "react";
import MultipleChoice from "./MultipleChoice";

function Question({question, points, setPoints}){
    
    //Since the API gives us the correct answers and wrong answers seperately, we are concatinating them into 1 array.
    //By putting correct and wrong answers into 1 array we'll be able to shuffle them and display the new array to the user.

 let allAnswers = question.incorrect_answers.concat(question.correct_answer)

return(
   <div>
    {//Using the hefty .replaceAll method to debug the parsing our API provided us with 
    }
    <h1> {question.question.replaceAll("&#039;", "'").replaceAll("&quot;", '"').replaceAll("&eacute;", "é") } </h1> 
    {//1. here we are creating a multiple-choice component for each question.
    //2. We are putting our new array of answers into the multiple choice component, where it will be displayed to the user.
    }
        <MultipleChoice answers={allAnswers} correct={question.correct_answer} points={points} setPoints={setPoints} />  
    </div>
)

}

export default Question;