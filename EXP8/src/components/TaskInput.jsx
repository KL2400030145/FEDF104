import { useState } from "react";

function TaskInput({ onAdd }) {
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    onAdd(newTask);
    setNewTask("");
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskInput;
