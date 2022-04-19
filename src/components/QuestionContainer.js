
import React from "react";
import Question from './Question'
import MultipleChoice from "./MultipleChoice";



function QuestionContainer({questions}){

return(
    <div>
    <h1>Trivia</h1>
   
    
    {questions}.map((e)={
    <Question data= {e.category}/>

})
    <MultipleChoice />
  
    </div>
    
)


}

export default QuestionContainer;