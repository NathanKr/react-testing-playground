import React from "react";
import "./App.css";
import Todos from './Todos'
import JsonPlaceholder from './JsonPlaceholder'

function App() {
  return (
    <div className="App">
      <h2>Todos</h2>
      <Todos/>
      <JsonPlaceholder/>
    </div>
  );
}

export default App;
