import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Todo({ user }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks", { headers: { uid: user.uid } })
      .then((res) => setTasks(res.data));
  }, []);

  const addTask = () => {
    axios.post("http://localhost:5000/api/tasks", { title, uid: user.uid, status: "To Do" })
      .then((res) => setTasks([...tasks, res.data]));
    setTitle("");
  };

  const toggleStatus = (task) => {
    const updated = { ...task, status: task.status === "To Do" ? "Done" : "To Do" };
    axios.put(`http://localhost:5000/api/tasks/${task._id}`, updated)
      .then(() => setTasks(tasks.map(t => t._id === task._id ? updated : t)));
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => setTasks(tasks.filter((t) => t._id !== id)));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <div className="flex mb-6 space-x-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
        />
        <button
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={addTask}
          disabled={!title.trim()}
        >
          Add Task
        </button>
      </div>
      <ul className="space-y-3">
        {tasks.length === 0 ? (
          <li className="text-center text-gray-500 py-4">No tasks yet. Add one to get started!</li>
        ) : (
          tasks.map((task) => (
            <li
              key={task._id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200"
            >
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={task.status === "Done"}
                  onChange={() => toggleStatus(task)}
                  className="h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500 cursor-pointer"
                />
                <span
                  className={`font-medium ${
                    task.status === "Done"
                      ? "text-gray-500 line-through"
                      : "text-gray-800"
                  }`}
                >
                  {task.title}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                    task.status === "Done"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {task.status}
                </span>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-red-500 hover:text-red-600 font-medium transition duration-200"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}