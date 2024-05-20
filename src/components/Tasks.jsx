import React from "react";
import NewTasks from "./NewTasks";

function Tasks({ tasks, onAddTasks, onDeleteTasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bolt text-stone-700 mb-4">Tasks</h2>
      <NewTasks onAddTasks={onAddTasks} tasks={tasks} />
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4 my-4">
          This project does not have any tasks
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span> {task.text}</span>
              <button
                onClick={() => onDeleteTasks(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
