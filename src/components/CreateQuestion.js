import React, { useState } from 'react'

function CreateQuestion(setData){
    const [form, setForm]= useState({question: '', })
    const [correct, setCorrect]=useState([])
    

const handleSubmit = async (e)=> {
  e.preventDefault()
  let req = await fetch('http://localhost:8004/poems',{
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(form)
  })
  let res = await req.json()
  

  setData((prevState) => [...prevState, res])

    }

    return(

        <div>
            <div>
                <h1 className="form-header" >
                    Create your own question
                    </h1>
            
            <div className='form'>
                <form className="Create Question" onSubmit = {handleSubmit} >
                <input className="user-question" placeholder ="Question" rows={10} value={form.question} onChange={(e)=>{ setForm({...form, question: e.target.value})}}/>
                <input placeholder="Difficulty" value={form.difficulty} onChange={(e)=>{ setForm({...form, difficulty: e.target.value})}}/>
                <input placeholder="Correct Answer" value={form.correctAnswer} onChange={(e)=>{ setForm({...form, difficulty: e.target.value})}}/>
                <input placeholder="Incorrect Answer" value={form.incorrectAnswer1} onChange={(e)=>{ setForm({...form, incorrectAnswer1: e.target.value})}}/>
                <input placeholder="Incorrect Answer" value={form.incorrectAnswer2} onChange={(e)=>{ setForm({...form, incorrectAnswer2: e.target.value})}}/>
                <input placeholder="Incorrect Answer" value={form.incorrectAnswer3} onChange={(e)=>{ setForm({...form, incorrectAnswer3: e.target.value})}}/>
                <input type="submit" value="Add your question" />
                </form>
            </div>
            </div>
            </div>
        
    )
}

export default CreateQuestion;