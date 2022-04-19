
import React from "react";
import Question from './Question'
import MultipleChoice from "./MultipleChoice";

function QuestionContainer({questions}){

return(
    <div>
    <h1>Trivia</h1> 
    {
        questions.map((element) => {
            return <Question question={element} /> 
        })
    }    
    </div>   
)
}

export default QuestionContainer;