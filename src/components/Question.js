import React from "react";
import MultipleChoice from "./MultipleChoice";

function Question(){

return(
   <div>
   <div className='question'>
        {}
        </div>
        
    <div className="choicebox">

        <MultipleChoice />
        
    </div>
    </div>
    
)

}

export default Question;