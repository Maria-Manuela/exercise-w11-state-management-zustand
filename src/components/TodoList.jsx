import { useState } from "react";

import { useTodoStore } from "../store/useTodoStore"
import "../styles.css"

export const TodoList = () => {
  const [todoText, setTodoText] = useState('') // State for the input field
  // using object destructuring and renaming the important hooks directly in the import statement
  const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== '') {
      addTodo(todoText); // Add todo to the globla state
      setTodoText(''); // Clear input field
    }
  };

  return (
    <div className="todo-list-container">
      <h2>Create a Todo</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter your todo..."
        />
        <button type="submit" className="add-button">Add Todo</button>
      </form>

      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            <div className="button-group">
              <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button>
              <button onClick={() => completeTodo(todo.id)} className={todo.completed ? 'incomplete-button' : 'complete-button'}>{todo.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
