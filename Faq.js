import React, { useState } from 'react'

function Todo(props) {
    const {title,desc} = props.todoData;

    const[toggole,Settoggole] = useState(false);
    
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={()=>{Settoggole(!toggole)}}>{toggole ? "-" : "+"}</button>
        {toggole && <p>{desc}</p>}
    </div>
  )
}

export default Todo
