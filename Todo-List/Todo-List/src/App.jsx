import { useState } from "react";
import "./App.css";

function TodoInput({onAdd}){
  const [Text,setText]=useState("");

  const handlesubmit=(e)=>{
    e.preventDefault();
    const trimmed=Text.trim();
    if(!trimmed)return;
    onAdd(trimmed);
    setText("");
  }

  return(
    <form className="todo-input" onSubmit={handlesubmit}>
      <input type="text" onChange={(e)=>setText(e.target.value)} value={Text} placeholder="Enter Your task" />
      <button type="submit">Add Task</button>
    </form>
  )
}

function TodoItem({todo,onToggle,onDelete}){
  return(
    <li className="todo-item">
      <label>
        <input type="checkbox" checked={todo.completed} onChange={()=>onToggle(todo.id)} />
        <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      </label>
      <button className="delete-btn" onClick={()=>onDelete(todo.id)}>Delete</button>
    </li>
  )
}

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return(
    <div className="app">
      <h1>Task Manager</h1>
      <TodoInput onAdd={addTodo} />
      {todos.length === 0 ? (
        <p className="Empty">No tasks yet. Add one to get started!</p>
      ) : (
        <>
          <ul className="todo-list">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
          <div className="stats">
            <span>Total: {totalCount}</span>
            <span>Completed: {completedCount}</span>
            <span>Remaining: {totalCount - completedCount}</span>
          </div>
        </>
      )}
    </div>
  )
}

export default App;
