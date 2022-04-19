import React from "react";
import MultipleChoice from "./MultipleChoice";

function Question({question}){
 let allAnswers = question.incorrect_answers.concat(question.correct_answer)

return(
   <div>
    <h1> {question.question} </h1> 
        <MultipleChoice answers={allAnswers} correct={question.correct_answer} />  
    </div>
)

}

export default Question;