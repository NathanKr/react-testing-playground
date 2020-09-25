import React, { useState, useRef } from "react";
import "./App.css";

function App() {
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
    <div className="App">
      <h2>Todos</h2>
      <input onKeyUp={(evt) =>{
        if(evt.key === 'Enter'){
          clickHandler();
        }
      }} ref={inputEl} type="text" />
      <button onClick={clickHandler}>Add</button>
      <ul>{todosElements}</ul>
    </div>
  );
}

export default App;
