
import React from "react";
import Question from './Question'
import MultipleChoice from "./MultipleChoice";

function QuestionContainer({questions, points, setPoints}){
    
return(
    <div>
    {
        questions.map((element) => {
            return <Question question={element} points={points} setPoints={setPoints} /> 
        })
     
    }    
    
    </div>   
)
}

export default QuestionContainer;