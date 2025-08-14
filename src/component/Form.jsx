import React, { useState } from 'react'

function Form({taskList, setTaskList}) {

    const [inputText, setInputText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskList([
            ...taskList, 
            {
                id: Date.now(),
                text: inputText,
                completed: false
            }
        ]);
        setInputText("")
    }

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

  return (
    <div className="Form">
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={inputText}/>
            <button>+</button>
        </form>
    </div>
  )
}


export default Form