
import React from "react";
import Question from './Question'
import MultipleChoice from "./MultipleChoice";

function QuestionContainer({questions, points, setPoints}){
    
return(
    <div>
    {
        //here we are creating a component for each question from the Data
        questions.map((element) => {
            return <Question question={element} points={points} setPoints={setPoints} /> 
        })
     
    }    
    
    </div>   
)
}

export default QuestionContainer;