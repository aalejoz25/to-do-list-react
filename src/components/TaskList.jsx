import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import "./../stylesheets/TaskList.css";

function TaskList() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    console.log(tarea);
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id != id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TaskForm onSubmit={agregarTarea}></TaskForm>
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Task
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          ></Task>
        ))}
      </div>
    </>
  );
}

export default TaskList;
