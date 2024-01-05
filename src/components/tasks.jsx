import React from "react";
import Task from "./task";

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id} // Certifique-se de adicionar uma chave única para cada Task
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  );
};

export default Tasks;
