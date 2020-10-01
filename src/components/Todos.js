import React, { useState, useRef } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const inputEl = useRef(null);

  const clickHandler = () => {
    let newTodos = [...todos];
    newTodos.push(inputEl.current.value);
    setTodos(newTodos);
    inputEl.current.value = "";
  };

  const todosElements = todos.map((it, index) => <li key={index}>{it}</li>);

  return (
    <div>
      <button onClick={clickHandler}>Add #{todos.length + 1}</button>
      <input
        onKeyUp={(evt) => {
          if (evt.key === "Enter") {
            clickHandler();
          }
        }}
        ref={inputEl}
        type="text"
        placeholder="insert a todo"
      />

      <ul>{todosElements}</ul>
    </div>
  );
}

export default Todos;
