# todolist-using-reactjs

 * ======================================================
 * 📝 React Todo App - 
 * ======================================================
 *
 * 🚀 Features:
 * - Add a new task
 * - Delete a task
 * - Edit a task
 * - Mark task as completed/incomplete
 * - Show/Hide completed tasks
 * - Data saved in browser using localStorage
 *
 * 🛠️ Technologies:
 * - React (useState, useEffect)
 * - uuid for unique IDs
 *
 * 📦 How To Run:
 * 1. Create a React app using `npx create-react-app todo-app`
 * 2. Replace the content of `src/App.js` with this file
 * 3. Run: `npm install uuid`
 * 4. Start the app: `npm start`
 *
 * 💾 localStorage:
 * - Automatically saves todos to localStorage
 * - Loads them when the app refreshes
 *
 * 🙌 Example filter line:
 *   let newTodos = todos.filter(item => item.id !== id);
 *   // This removes the todo whose id matches
 *
 * Made with ❤️ by Aman
 */
<!-- 
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // to generate unique IDs

function App() {
  // State to hold current task input
  const [task, setTask] = useState("");

  // State to hold all todo tasks
  const [todos, setTodos] = useState([]);

  // State to toggle show/hide completed tasks
  const [finishedTask, setFinishedTask] = useState(true);

  // Load todos from localStorage when app loads
  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let savedTodos = JSON.parse(todoString);
      setTodos(savedTodos);
    }
  }, []);

  // Save todos array to localStorage
  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Handle input change in textbox
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Add task to todos array
  const handleAdd = () => {
    if (task.trim() === "") return; // prevent empty input
    setTodos([...todos, { id: uuidv4(), task, isCompleted: false }]);
    setTask(""); // clear input field
    saveToLocal(); // save updated todos to localStorage
  };

  // Delete a task by ID
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this task?")) {
      let newTodos = todos.filter((item) => item.id !== id);
      setTodos(newTodos);
      saveToLocal();
    }
  };

  // Toggle checkbox status for a task
  const handleCheck = (e) => {
    const id = e.target.name; // we set name = item.id
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos]; // copy todos
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLocal();
  };

  // Edit task: load into input, and remove from todos
  const handleEdit = (id) => {
    let taskToEdit = todos.find((item) => item.id === id);
    setTask(taskToEdit.task); // put task text into input
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos); // remove old version
    saveToLocal();
  };

  // Toggle whether to show completed tasks
  const toggleFinished = () => {
    setFinishedTask(!finishedTask);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo App</h2>

      {/* Input for new task */}
      <input
        value={task}
        onChange={handleChange}
        type="text"
        placeholder="Enter a task"
      />

      {/* Button to add task */}
      <button onClick={handleAdd}>Add</button>

      {/* Checkbox to toggle visibility of completed tasks */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={finishedTask}
            onChange={toggleFinished}
          />
          Show Completed
        </label>
      </div>

      <h3>Your Tasks</h3>

      {/* Message if no tasks */}
      {todos.length === 0 && <p>No tasks to show.</p>}

      {/* Loop through todos and render */}
      {todos.map((item) => {
        return (
          // Only show unfinished tasks if 'finishedTask' is false
          (finishedTask || !item.isCompleted) && (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              {/* Checkbox for marking complete */}
              <input
                type="checkbox"
                name={item.id}
                checked={item.isCompleted}
                onChange={handleCheck}
              />

              {/* Task text (crossed if completed) */}
              <span
                style={{
                  textDecoration: item.isCompleted ? "line-through" : "none",
                  margin: "0 10px",
                }}
              >
                {item.task}
              </span>

              {/* Edit and Delete buttons */}
              <button onClick={() => handleEdit(item.id)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          )
        );
      })}
    </div>
  );
}

export default App; -->
