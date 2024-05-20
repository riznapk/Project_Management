import React, { useState } from "react";

function NewTasks({ onAddTasks }) {
  const [eneteredTasks, setEnteredTasks] = useState();
  function handleChange(event) {
    setEnteredTasks(event.target.value);
  }

  const handleClick = () => {
    if (eneteredTasks.trim() === "") {
      return;
    }
    onAddTasks(eneteredTasks);
    setEnteredTasks("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={eneteredTasks}
        type="text"
        className="w-64 px-2 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTasks;
