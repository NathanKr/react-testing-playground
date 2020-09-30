import React, { useState, useRef } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const inputEl = useRef(null);

  const clickHandler = () => {
    let newTodos = [...todos];
    newTodos.push(inputEl.current.value);
    setTodos(newTodos);
    inputEl.current.value="";
  };

  const todosElements = todos.map((it) => <li>{it}</li>);

  return (
    <div>
      <button onClick={clickHandler}>Add</button>
      <input onKeyUp={(evt) =>{
        if(evt.key === 'Enter'){
          clickHandler();
        }
      }} ref={inputEl} type="text" />
      
      <ul>{todosElements}</ul>
    </div>
  );
}

export default Todos;
