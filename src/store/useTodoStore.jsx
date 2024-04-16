import { create } from "zustand"

//The create function from Zustand is your starting point. It accepts a setter function to help you define the state and its updater functions

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => ({ todos: [...state.todos, { id: Date.now(), text: todo, completed: false }] }))
  },
  deleteTodo: (id) => {
    set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) }))
  },
  completeTodo: (id) => {
    set((state) => ({
      todos: state.todos.map(todo => todo.id === id ? {
        ...todo, completed: !todo.completed
      } : todo)
    }))
  },
}));
