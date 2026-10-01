import React, { useState, useEffect } from "react";
import("./global.css");
const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("my-todo-tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("my-todo-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="min-h-screen bg-gray-500 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          To-Do List
        </h1>
        {totalTasks > 0 && (
          <p className="text-center text-sm text-gray-500 mt-2 mb-6">
            Completed{" "}
            <span className="font-semibold text-blue-600">
              {completedTasks}
            </span>{" "}
            of <span className="font-semibold text-gray-700">{totalTasks}</span>{" "}
            tasks
          </p>
        )}

        {totalTasks === 0 && <div className="mb-6"></div>}
        <div className=" flex justify-between">
          <input
            type="text"
            placeholder="Enter a new task"
            className="flex-1 px-4 py-2 border mr-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={taskInput}
            onChange={(e) => {
              setTaskInput(e.target.value);
            }}
          />
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-3xl transition duration-200"
          >
            Add Task
          </button>
        </div>

        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200 mt-3"
            >
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />

                <span
                  className={`text-gray-700 break-all cursor-pointer select-none ${
                    task.completed ? "line-through text-gray-400 italic" : ""
                  }`}
                  onClick={() => toggleComplete(task.id)}
                >
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="ml-2 text-red-500 hover:text-red-700 font-medium p-1 rounded hover:bg-red-50 transition duration-150"
                title="Delete task"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
        {tasks.length === 0 && (
          <p className="text-center text-gray-400 mt-4 text-sm">
            No tasks yet!
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
