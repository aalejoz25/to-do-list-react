import { useState } from "react";
import reactLogo from "./assets/react.svg";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img src={reactLogo} className="logo" alt="logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <TaskList></TaskList>
      </div>
    </div>
  );
}

export default App;
