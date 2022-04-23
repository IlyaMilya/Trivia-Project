import React, { useState } from 'react'

function CreateQuestion({setData}){
    let incorrectAnswer1 = ""
    let incorrectAnswer2 = ""
    let incorrectAnswer3 = ""
    const [form, setForm]= useState({category: '', type:'',  difficulty: '', question: '', correctAnswer: '', incorrectAnswers: [{incorrectAnswer1:'' ,incorrectAnswer2:'',incorrectAnswer3:''}]})
    const [correct, setCorrect]=useState([])
    

const handleSubmit = async (e)=> {
  e.preventDefault()
  let req = await fetch('http://localhost:8001/results',{
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(form)
  })
  let res = await req.json()
  

  setData((prevState) => [...prevState, res])
  console.log(res)

  console.log('im hairy potter')
    }

    return(

        <div>
            <div>
                <h1 className="form-header" >
                    Create your own question
                    </h1>
            
            <div className='form'>
                <form className="createQuest" onSubmit = {(e)=> {handleSubmit(e)}} >
                <input className="user" placeholder ="Question" rows={10} value={form.question} onChange={(e)=> setForm({...form, question: e.target.value})}/>
                <input className= "user" placeholder="Difficulty" value={form.difficulty} onChange={(e)=>setForm({...form, difficulty: e.target.value})}/>
                <input className="user" id='correct' placeholder="Correct Answer" value={form.correctAnswer} onChange={(e)=> setForm({...form, correctAnswer: e.target.value})}/>
                <input className="user" id='incorrect' placeholder="Incorrect Answer" value={form.incorrectAnswer1} onChange={(e)=> setForm({...form, incorrectAnswer1: e.target.value})}/>
                <input className="user"id='incorrect' placeholder="Incorrect Answer" value={form.incorrectAnswer2} onChange={(e)=> setForm({...form, incorrectAnswer2: e.target.value})}/>
                <input className="user"id='incorrect' placeholder="Incorrect Answer" value={form.incorrectAnswer3} onChange={(e)=> setForm({...form, incorrectAnswer3: e.target.value})}/>
                
                <div>
                <div className="submit">
                <button className="submit-button" type="submit">Add your question</button>
                </div>
                </div>
                </form>
            </div>
            </div>
            </div>
        
    )
}

export default CreateQuestion;